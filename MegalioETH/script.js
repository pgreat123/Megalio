document.addEventListener("DOMContentLoaded", () => {
    console.log("NFT Project Website Loaded");
  
    const nftImages = document.querySelectorAll(".testnet-carousel img");
    const traitsPanel = document.getElementById("traitsPanel");
  
    const traits = {
      "nft1": ["Background: Blue", "Eyes: Laser", "Head: Hat"],
      "nft2": ["Background: Red", "Eyes: Sunglasses", "Head: Helmet"],
      "nft3": ["Background: Green", "Eyes: Glow", "Head: Cap"],
      "nft4": ["Background: Purple", "Eyes: Robotic", "Head: Horns"],
      "nft5": ["Background: Orange", "Eyes: Starry", "Head: Crown"]
    };
  
    function showTraits(nftId) {
      const selectedTraits = traits[nftId] || ["No traits found"];
      traitsPanel.innerHTML = `
        <h3>Traits</h3>
        <ul>
          ${selectedTraits.map(trait => `<li>${trait}</li>`).join("")}
        </ul>
      `;
    }
  
    nftImages.forEach((img, index) => {
      img.setAttribute("data-id", `nft${index + 1}`);
      img.addEventListener("click", () => {
        nftImages.forEach(i => i.classList.remove("focused"));
        img.classList.add("focused");
  
        const nftId = img.getAttribute("data-id");
        showTraits(nftId);
  
        img.scrollIntoView({ behavior: "smooth", inline: "center" });
      });
    });
  
    if (nftImages.length > 0) {
      nftImages[0].classList.add("focused");
      nftImages[0].setAttribute("data-id", "nft1");
      showTraits("nft1");
    }
  
});

  