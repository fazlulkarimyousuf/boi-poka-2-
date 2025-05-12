import React, {useEffect} from 'react';
import {useLoaderData} from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getStoreBook} from '../../Utility/addToDB';

const ReadList = () => {


  const data = useLoaderData();
  console.log(data);

  

  useEffect(() => {
    const storedBookData = getStoreBook(); 
    console.log(storedBookData);
    

  },[])


  
    return (
        <div>
            {/* <h1>hi ami  ReadList</h1> */}
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i Read</h2>
    </TabPanel>
    <TabPanel>
      <h2>My wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;