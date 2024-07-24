export interface Data {
  count: number;
  documents: Document[];
}

export interface Document {
  alertedDate: Date;
  date: Date | null;
  documentId: string;
  feedback: any[];
  feedbackState: FeedbackState;
  libraryId: string;
  source: string;
  title: string;
  url: string;
  sentences: Sentence[];
}

export enum FeedbackState {
  Inbox = "Inbox",
}

export interface Sentence {
  alertTypes: AlertType[];
  confidenceScore: number;
  entityHighlights: string[];
  position: number;
  relatedEntities: string[];
  text: string;
}

export enum AlertType {
  Accidents = "Accidents",
  AerospaceComponentsAndSystems = "Aerospace Components and Systems",
  ComponentsAndSystemsAviation = "Components and Systems (Aviation)",
  Innovation = "Innovation",
  LeadershipMentions = "Leadership Mentions",
  LinkedInPost = "LinkedIn Post",
  MA = "M&A",
  MaterialsAndManufacturing = "Materials and Manufacturing",
  MaterialsAndManufacturingAviation = "Materials and Manufacturing (Aviation)",
  Mention = "Mention",
  Operational = "Operational",
  OperationalActivityAircraft = "Operational Activity (Aircraft)",
  OrganisationExpansion = "Organisation Expansion",
  Partnerships = "Partnerships",
  ProductEvent = "Product Event",
  ProjectEvent = "Project Event",
  Regulatory = "Regulatory",
  Research = "Research",
  Risks = "Risks",
  Startups = "Startups",
  SupplyChain = "Supply Chain",
}
