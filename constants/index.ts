export interface BlogType{
    id:number;
    title:string;
    description:string;
    image:string;
    active:boolean;
}

export const Blog: BlogType[] = [
    {
        id:1,
        title:"Foam Roller'ın Kaslarınıza Büyük Etkisi",
        description:"Foam Roller Foam Roller Foam Roller Foam Roller",
        image:"/photos/img1.jpg",
        active:true,

    },{
        id:2,
        title:"Dik Durmak İçin Bunları Yapın",
        description:"Dik Durma Dik Durma Dik Durma Dik Durma",
        image:"/photos/img6.jpg",
        active:true,

    },{
        id:3,
        title:"Sağlıklı Nefes Almak",
        description:"Nefes Alma Nefes Alma Nefes Alma Nefes Alma",
        image:"/photos/img3.jpg",
        active:true,

    },{
        id:4,
        title:"Koşulara Başlamadan Önce Bilmeniz Gerekenler",
        description:"Koşu Hazırlığı Koşu Hazırlığı Koşu Hazırlığı Koşu Hazırlığı",
        image:"/photos/img5.jpg",
        active:true,

    },{
        id:5,
        title:"Zıplamanın Bilinmeyen Faydaları",
        description:"Zıplama Zıplama Zıplama Zıplama Zıplama",
        image:"/photos/img4.jpg",
        active:true,

    },{
        id:6,
        title:"Amut Öğrenmenin Yolculuğu",
        description:"Amuta kalkma Amuta kalkma Amuta kalkma Amuta kalkma",
        image:"/photos/img2.jpg",
        active:true,

    },
]

export const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  export const urunler: { title: string; href: string; description: string }[] = [
    {
        title: "Tüm Ürünler",
        href: "/docs/primitives/tabs",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
    {
      title: "Ekipmanlar",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Erkek",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Aksesuarlar",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Kadın",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Çocuk",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]