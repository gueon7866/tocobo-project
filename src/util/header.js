const img = (path) => `/img/${path}`


export const headerData = {
    logo: {
        src: img("logo.svg"),  // 예: /public/img/logo_tocobo.svg
        alt: "TOCOBO",
        href: "/",                    // 로고 클릭시 이동
        width: 120,
        height: 28,
    },
}