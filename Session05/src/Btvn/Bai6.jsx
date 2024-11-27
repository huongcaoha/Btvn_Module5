import React, { useEffect, useState } from "react";

export default function Bai6() {
  const [indexScroll, setIndexscroll] = useState(0);
  const getLocation = () => {
    setIndexscroll(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener("scroll", getLocation);
    return () => {
      document.removeEventListener("scroll", getLocation);
    };
  }, []);
  return (
    <div>
      <h1>Đây là bài tập 6</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        accusantium culpa autem est velit provident eaque molestias perferendis
        sit. Blanditiis nisi et hic cum cumque rerum alias consectetur optio
        dolore! Perferendis, amet corporis ratione eveniet, molestias tempora
        perspiciatis expedita eos, quae laudantium quia. Id corrupti suscipit
        facere minus odit molestias quam amet et. Unde quidem autem nobis enim,
        exercitationem ea. Quaerat dignissimos nulla possimus temporibus,
        asperiores a aperiam facere eveniet placeat. Voluptatum autem
        reprehenderit maxime numquam ex, natus ullam eligendi soluta excepturi
        qui hic architecto tenetur, quaerat eos doloremque laboriosam! Aut eos
        corrupti labore, ratione delectus iure vitae enim deleniti, iste
        cupiditate eius ullam praesentium rem repellendus facere! Libero ipsa
        numquam cumque ut temporibus alias illo tempora, praesentium sequi!
        Reprehenderit! Asperiores mollitia, ea libero rerum fugit eligendi esse
        sequi repellat. Nulla praesentium voluptatem veniam odio temporibus aut
        inventore quod nisi voluptatibus animi sed corporis omnis eveniet qui
        assumenda, recusandae provident. Quibusdam vitae laborum odio labore
        beatae doloribus minus eligendi. Minima, deserunt! Mollitia dolorum
        debitis, commodi perferendis beatae iure ipsum harum numquam quisquam
        iste molestias impedit nemo ut laboriosam libero quidem. Necessitatibus
        eveniet, harum saepe recusandae corporis, perspiciatis dolorem nihil
        sequi pariatur similique quas repellendus cum quisquam molestiae qui
        obcaecati excepturi eligendi! Odit veritatis accusamus quam facilis
        obcaecati, a voluptatum optio? Necessitatibus repellendus optio ipsa
        quasi ullam sapiente minus distinctio, suscipit, repellat tempore sit
        quo eius accusantium iure blanditiis illo deleniti at? Ut quas unde
        suscipit veniam aliquam eos repellendus et! Natus magnam maiores
        assumenda sapiente pariatur at necessitatibus? Quod repellendus magnam
        facere cupiditate deserunt nemo adipisci modi, sunt animi iure eveniet
        voluptatum similique corrupti officiis, natus magni deleniti consequatur
        praesentium? Maxime error delectus reiciendis non, consequatur facilis
        dolore itaque quam nemo quasi alias magnam doloremque velit odit et
        tempora optio nisi iure nobis dolores unde excepturi architecto eos?
        Facere, nemo! Sequi sapiente dolor repellat eum in ducimus dignissimos
      </p>
      <h3>Vị trí cuộn : {indexScroll}</h3>
      <br />
      <hr />
    </div>
  );
}
