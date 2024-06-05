export interface HomePageData {
  info: ContactsInfo;
  main_menu: HeaderMenu[];
  main_header: HeaderMain;
  slider_img: HeaderSlide[]
}

export interface ContactsInfo {
  id: number;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyDescription: string;
}

export interface HeaderMenu {
  id: number;
  title: string;
  href: string;
}

export interface HeaderMain {
  id: number;
  title: string;
  tagline: string;
}

export interface HeaderSlide {
  img_name: string
  img_url: string,
  name_tag: string,
  name_tag_rus: string
}
