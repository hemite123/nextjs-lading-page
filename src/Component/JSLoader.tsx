import Script from "next/script";

export default function ScriptCollection() {
    return (
        <>
            <Script src="/css/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
            <Script src="/css/vendor/php-email-form/validate.js" strategy="afterInteractive" />
            <Script src="/css/vendor/aos/aos.js" strategy="afterInteractive" />
            <Script src="/css/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
            <Script src="/css/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
            <Script src="/css/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
            <Script src="/css/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
            <Script src="/css/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
            <Script src="/css/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
            <Script src="/js/main.js" strategy="afterInteractive" />
        </>
    )
}