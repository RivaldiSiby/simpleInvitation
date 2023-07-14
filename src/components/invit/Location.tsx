import React from "react";

export default function Location() {
  return (
    <div className="text-gray-500 pt-5">
      <h4 className="text-yellow-100 font-serif text-center text-[14px]">
        Lokasi{" "}
      </h4>
      <hr className="mx-40" />
      <p className="text-[12px] text-white text-center mt-2">
        Perum Asri Lanjutan Blok.Q No.24 lorong gaharu
      </p>
      <section className="w-[300px] h-[300px] border mb-20 mx-auto mt-2">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              height={300}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=1.444249495761169, 125.10640679453046&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
