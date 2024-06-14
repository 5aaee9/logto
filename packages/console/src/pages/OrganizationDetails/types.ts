import { type OrganizationEmailDomain, type Organization } from '@logto/schemas';

export type OrganizationDetailsOutletContext = {
  data: Organization;
  emailDomains: OrganizationEmailDomain[];
  /**
   * Whether the organization is being deleted, this is used to disable the unsaved
   * changes alert modal.
   */
  isDeleting: boolean;
  onUpdated: (data: Organization) => void;
};

export enum OrganizationDetailsTabs {
  Settings = 'settings',
  Members = 'members',
}
