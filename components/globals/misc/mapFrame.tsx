export default function MappedLocationFrame({ mapLocation }: any) {
  return (
    <div className="w-full h-[30rem] col-all-start">
      <iframe
        src={
          mapLocation ??
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7350705936096!2d-0.17069842517596592!3d5.606095494374821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1fff72b87d%3A0xff2fe8ba5dfa0561!2sKotoka%20International%20Airport%20-%20Accra!5e0!3m2!1sen!2sgh!4v1727878879350!5m2!1sen!2sgh"
        }
        width="100%"
        height="450"
        style={{ border: 0, marginTop: "" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
