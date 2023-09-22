  // Fetch data from API and populate the table
  fetch('https://rest.coinapi.io/v1/assets')
  .then(response => response.json())
  .then(data => {
      const coinTableBody = document.getElementById('coinTable').getElementsByTagName('tbody')[0];

      data.forEach(asset => {
          const row = coinTableBody.insertRow();
          const symbolCell = row.insertCell(0);
          const nameCell = row.insertCell(1);
          const priceCell = row.insertCell(2);
          const volumeCell = row.insertCell(3);

          symbolCell.innerHTML = asset.asset_id;
          nameCell.innerHTML = asset.name;
          priceCell.innerHTML = asset.price_usd.toFixed(2);
          volumeCell.innerHTML = asset.volume_1day.toFixed(2);
      });
  });
