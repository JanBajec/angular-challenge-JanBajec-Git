import {Price} from './price';
import {Location} from './location';
import {Plans} from './plans';
import {Tag} from "./tag";

export class Data {
  spId?: string;
  campaignId?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardTags?: [];
  mediaType?: string;
  primaryMediaUrl?: string;
  additionalMediaUrls?: [];
  callToAction?: string;
  cardStartDate?: string;
  cardEndDate?: string;
  listOfAttributes?: [];
  cardQuestion?: [];
  isPhysicalProduct?: boolean;
  availableQuantity?: number;
  returnPolicy?: string;
  termsOfServices?: string;
  likes?: number;
  shares?: number;
  views?: number;
  subscribers?: number;
  unSubscribers?: number;
  open?: number;
  discard?: number;
  totalRevenue?: number;
  listOfPlans?: Plans[]; // preveriii
  isLocalPriceViewEnabled?: boolean;
  segments?: [];
  locations?: Location[]; // preveriiiiii
  startAgeLimit?: number;
  endAgeLimit?: number;
  gender?: string;
  groups?: [];
  interests?: [];
  currentWorkflow?: string;
  listOfWorkflowStatuses?: [];
  listOfReviews?: [];
  totalReviews?: number;
  listOfSupportTags?: Tag[];
  comulativeRating?: number;
  maxQuantityPerUser?: number;
  campaignEndDate?: string;
  id?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
