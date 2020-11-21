export type StepState = {
  Title: string;
  Info: {
    Header: string;
    Text: string;
  };

  Nav: NavElementSettings;
};

export type NavElementSettings = {
  ShowNext: boolean;
  ShowSp: boolean;
  ShowPrev: boolean;
  ShowDone: boolean;
};

export class DefaultStepState implements StepState {
  Title: string;
  Info: {
    Header: string;
    Text: string;
  };
  Nav: {
    ShowNext: boolean;
    ShowSp: boolean;
    ShowPrev: boolean;
    ShowDone: boolean;
  };
  constructor() {
    this.Title = "Step Title";
    this.Info = {
      Header: "Step Info Header",
      Text: "Step Text",
    };
    this.Nav = {
      ShowNext: true,
      ShowSp: true,
      ShowPrev: true,
      ShowDone: true,
    };
  }
}
