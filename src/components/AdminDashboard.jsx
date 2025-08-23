import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  Container,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Person as PersonIcon,
  Event as EventIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { collection, getDocs, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRsvp, setSelectedRsvp] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchRSVPs();
  }, []);

  const fetchRSVPs = async () => {
    try {
      const q = query(collection(db, 'rsvp'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const rsvpData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRsvps(rsvpData);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewRsvp = (rsvp) => {
    setSelectedRsvp(rsvp);
    setDialogOpen(true);
    setEditMode(false);
  };

  const handleEditRsvp = (rsvp) => {
    setSelectedRsvp(rsvp);
    setEditData(rsvp);
    setDialogOpen(true);
    setEditMode(true);
  };

  const handleSaveEdit = async () => {
    try {
      await updateDoc(doc(db, 'rsvp', selectedRsvp.id), editData);
      await fetchRSVPs();
      setDialogOpen(false);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating RSVP:', error);
    }
  };

  const getStatusColor = (attending) => {
    switch (attending) {
      case 'yes': return 'success';
      case 'no': return 'error';
      case 'maybe': return 'warning';
      default: return 'default';
    }
  };

  const getStatusText = (attending) => {
    switch (attending) {
      case 'yes': return 'משתתף';
      case 'no': return 'לא משתתף';
      case 'maybe': return 'אולי';
      default: return 'לא ידוע';
    }
  };

  const getTotalGuests = () => {
    return rsvps
      .filter(rsvp => rsvp.attending === 'yes')
      .reduce((total, rsvp) => total + (rsvp.numberOfGuests || 1), 0);
  };

  const getAttendingCount = () => {
    return rsvps.filter(rsvp => rsvp.attending === 'yes').length;
  };

  const getNotAttendingCount = () => {
    return rsvps.filter(rsvp => rsvp.attending === 'no').length;
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontFamily: 'Heebo, sans-serif' }}>
            לוח בקרה - בר מצווה
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Box sx={{ mt: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 } }}>
          {/* Statistics Cards */}
          <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 3, sm: 4 } }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <PersonIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: '#1976d2', mr: 2 }} />
                    <Box>
                      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        {rsvps.length}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        סה"כ תגובות
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <CheckCircleIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: '#4caf50', mr: 2 }} />
                    <Box>
                      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        {getAttendingCount()}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        משתתפים
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <TrendingUpIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: '#ff9800', mr: 2 }} />
                    <Box>
                      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        {getTotalGuests()}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        סה"כ אורחים
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <CancelIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: '#f44336', mr: 2 }} />
                    <Box>
                      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        {getNotAttendingCount()}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Heebo, sans-serif' }}>
                        לא משתתפים
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* RSVP Table */}
          <Paper elevation={3}>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontFamily: 'Heebo, sans-serif', mb: 3 }}>
                רשימת תגובות
              </Typography>
              
              <TableContainer>
                <Table size={isMobile ? "small" : "medium"}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>שם</TableCell>
                      {!isMobile && (
                        <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>טלפון</TableCell>
                      )}
                      {!isMobile && (
                        <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>אימייל</TableCell>
                      )}
                      <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>מספר אורחים</TableCell>
                      <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>סטטוס</TableCell>
                      {!isMobile && (
                        <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>תאריך</TableCell>
                      )}
                      <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>פעולות</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rsvps.map((rsvp) => (
                      <TableRow key={rsvp.id}>
                        <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>
                          {rsvp.firstName} {rsvp.lastName}
                        </TableCell>
                        {!isMobile && (
                          <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>
                            {rsvp.phone || '-'}
                          </TableCell>
                        )}
                        {!isMobile && (
                          <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>
                            {rsvp.email || '-'}
                          </TableCell>
                        )}
                        <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>
                          {rsvp.numberOfGuests || 1}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={getStatusText(rsvp.attending)}
                            color={getStatusColor(rsvp.attending)}
                            size={isMobile ? "small" : "medium"}
                            sx={{ fontFamily: 'Heebo, sans-serif' }}
                          />
                        </TableCell>
                        {!isMobile && (
                          <TableCell sx={{ fontFamily: 'Heebo, sans-serif' }}>
                            {rsvp.timestamp?.toDate?.()?.toLocaleDateString('he-IL') || '-'}
                          </TableCell>
                        )}
                        <TableCell>
                          <IconButton 
                            onClick={() => handleViewRsvp(rsvp)}
                            size={isMobile ? "small" : "medium"}
                          >
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton 
                            onClick={() => handleEditRsvp(rsvp)}
                            size={isMobile ? "small" : "medium"}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* RSVP Details Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        maxWidth="md" 
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 3,
            direction: 'rtl'
          }
        }}
      >
        <DialogTitle sx={{ fontFamily: 'Heebo, sans-serif' }}>
          {editMode ? 'עריכת תגובה' : 'פרטי תגובה'}
        </DialogTitle>
        <DialogContent>
          {selectedRsvp && (
            <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="שם פרטי"
                  value={editMode ? editData.firstName : selectedRsvp.firstName}
                  onChange={(e) => editMode && setEditData({...editData, firstName: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="שם משפחה"
                  value={editMode ? editData.lastName : selectedRsvp.lastName}
                  onChange={(e) => editMode && setEditData({...editData, lastName: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="טלפון"
                  value={editMode ? editData.phone : selectedRsvp.phone}
                  onChange={(e) => editMode && setEditData({...editData, phone: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="אימייל"
                  value={editMode ? editData.email : selectedRsvp.email}
                  onChange={(e) => editMode && setEditData({...editData, email: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="מספר אורחים"
                  type="number"
                  value={editMode ? editData.numberOfGuests : selectedRsvp.numberOfGuests}
                  onChange={(e) => editMode && setEditData({...editData, numberOfGuests: parseInt(e.target.value)})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="הודעה אישית"
                  value={editMode ? editData.message : selectedRsvp.message}
                  onChange={(e) => editMode && setEditData({...editData, message: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="הודעה אישית"
                  multiline
                  rows={isMobile ? 2 : 3}
                  value={editMode ? editData.message : selectedRsvp.message}
                  onChange={(e) => editMode && setEditData({...editData, message: e.target.value})}
                  disabled={!editMode}
                  sx={{ fontFamily: 'Heebo, sans-serif' }}
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} sx={{ fontFamily: 'Heebo, sans-serif' }}>
            סגור
          </Button>
          {editMode && (
            <Button onClick={handleSaveEdit} variant="contained" sx={{ fontFamily: 'Heebo, sans-serif' }}>
              שמור
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
