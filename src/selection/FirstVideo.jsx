import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";

const FirstVideo = () => {
  const videoRaf = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "Power1.InOut" });
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      ease: "Power1.InOut",
      duration: 1,
    });

    videoRaf.current.onloadedmetadata = () => {
      tl.to(videoRaf.current, {
        currentTime: videoRaf.current.duration,
        ease: "none",
        duration: 3,
      },'<');
    }
  });

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRaf}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        ></video>
      </div>
    </section>
  );
};

export default FirstVideo;
