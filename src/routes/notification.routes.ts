import { Router } from 'express';
import { authenticate } from '../middleware';
import expressAsyncHandler from 'express-async-handler';
import {
  getNotifications,
  createNotification,
  notifySuperAdmin,
  markAsRead,
  deleteNotification
} from '../controllers/notification.controller';

const notificationRoutes = Router();

// All routes assume /api prefix is handled globally
notificationRoutes.get('/', authenticate, expressAsyncHandler(getNotifications));
notificationRoutes.post('/', authenticate, expressAsyncHandler(createNotification));
notificationRoutes.post('/superadmin', authenticate, expressAsyncHandler(notifySuperAdmin));
notificationRoutes.patch('/:id/read', authenticate, expressAsyncHandler(markAsRead));
notificationRoutes.patch('/:id', authenticate, expressAsyncHandler(deleteNotification));

export default notificationRoutes;