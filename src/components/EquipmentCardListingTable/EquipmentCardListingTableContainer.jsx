import EquipmentCardListingTable from './EquipmentCardListingTable';
import { collection, getDocs } from 'firebase/firestore';
import { Box } from '@mui/material';
import { db } from '../../firebase-config';
import { useEffect, useState } from 'react';

const EquipmentCardListingTableContainer = () => {
  const [listings, setListings] = useState();
  const listingsRef = collection(db, 'listings');
  const getListings = async () => {
    await getDocs(listingsRef).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({...doc.data(), listingId: doc.id }));
      setListings(data);
    });
  };
  useEffect(() => {
    getListings();
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: '#777777', height: '200px', m: 1 }}/> {/* banner temp for fitlers */}
      <EquipmentCardListingTable listings={listings} />
    </>
  )
}

export default EquipmentCardListingTableContainer