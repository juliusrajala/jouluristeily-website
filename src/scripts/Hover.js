(function(){
  console.log('Initializing hover');
  const hoverableLogo = document.getElementById('logo-hoverable');

  const hoverBox = document.createElement('div');
  hoverBox.classList.add('sponsors--hover');
  hoverBox.innerHTML = "Jouluristeilyä sponsoroi tänäkin vuonna perinteisesti Loimu. Luonnon-, ympäristö- ja metsätieteilijöiden liitto Loimu on monialainen liitto: koulutukseltaan jäsenet ovat biologeja, biotieteilijöitä, kemistejä, geologeja, limnologeja, metsänhoitajia, ympäristötieteilijöitä, meteorologeja, maantieteilijöitä, tilastotieteilijöitä, fyysikoita, matemaatikoita – ja monia muita.";

  console.log(hoverableLogo, 'logo')

  if (!!hoverableLogo) {
    hoverableLogo.addEventListener('mouseover',() => {
      console.log('Hovering over hoverable object');
      hoverableLogo.appendChild(hoverBox);
    })
    hoverableLogo.addEventListener('mouseleave', () => {
      hoverableLogo.removeChild(hoverBox);
    })
  }
})();

