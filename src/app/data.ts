import {Price} from './price';
import {Location} from './location';
import {Plans} from './plans';

export class Data {
  campaignId: string;
  cardTitle: string;
  cardDescription: string;
  primaryMediaUrl: string;
  cardStartDate: string;
  cardEndDate: string;
  availableQuantity: number;
  likes: number;
  shares: number;
  views: number;
  subscribers: number;
  unSubscribers: number;
  open: number;
  discard: number;
  totalRevenue: number;
  listOfPlans: Plans[]; // preveriii
  locations: Location[]; // preveriiiiii
  currentWorkflow: string;
  campaignEndDate: string;
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
