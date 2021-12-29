import Image from "next/image";
import Counter from "./Counter";

const YouTube = () => {
  return (
    <section className="youtube relative my-12" style={{ aspectRatio: "16/9" }}>
      <div className="my-12">
        <Image alt="YouTube Logo" src="/yt.png" width="301" height="68" />
      </div>
      <Counter
        from="10000"
        end="32000"
        duration="2"
        suffix=" views"
        size="text-7xl"
      />
      <Counter
        from="1000"
        end="1015"
        duration="2"
        suffix=" likes"
        size="text-4xl"
      />
      <Counter
        from="1000"
        end="1100"
        duration="2"
        suffix=" new subscribers"
        size="text-4xl"
      />
      <Counter
        from="10"
        end="21"
        duration="2"
        suffix=" personal videos created"
        size="text-6xl"
      />
      <Counter
        from="10"
        end="38"
        duration="2"
        suffix=" work videos created"
        size="text-5xl"
      />
    </section>
  );
};
export default YouTube;