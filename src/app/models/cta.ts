export interface Cta {
  id: number;
  type_id: number;
  title?: string;
  config: {
    url?: string;
    phone?: string;
    file?: string;
    html: string;
    list_id?: string;
    file_url?: string;
    account_id?: string;
    fields?: string;
    file_id?: string;
    updated_at: string;
  };
  top_text?: string;
  bottom_text?: string;
  namespace?: string;
}

export enum CtaType {
  AUTO_FORWARD = 1,
  TAP_TO_CALL = 2,
  CUSTOM_FILE = 3,
  DOWNLOAD_FILE = 4,
  EMAIL_ME = 3,
  CUSTOM_HTML = 6,
}

export const getCtaIcon = (typeId: number) => {
  switch (typeId) {
    case CtaType.AUTO_FORWARD : {
      return 'forward';
    }
    case CtaType.TAP_TO_CALL : {
      return 'call';
    }
    case  CtaType.CUSTOM_FILE : {
      return 'content_paste';
    }
    case  CtaType.DOWNLOAD_FILE : {
      return 'file_download';
    }
    case CtaType.EMAIL_ME : {
      return 'email';
    }
    case CtaType.CUSTOM_HTML : {
      return 'code';
    }
  }
};

export const getCtaTitle = (typeId: number) => {
  switch (typeId) {
    case CtaType.AUTO_FORWARD : {
      return 'Auto Forward To Web Page';
    }
    case  CtaType.TAP_TO_CALL : {
      return 'Tap To Call';
    }
    case CtaType.CUSTOM_FILE : {
      return 'Custom Form';
    }
    case CtaType.DOWNLOAD_FILE : {
      return 'Download File';
    }
    case CtaType.EMAIL_ME : {
      return 'Email Me';
    }
    case CtaType.CUSTOM_HTML : {
      return 'Custom HTML';
    }
    default : {
      return '';
    }
  }
};

