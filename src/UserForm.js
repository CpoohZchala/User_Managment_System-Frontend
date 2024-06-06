import { Grid, Input, Typography } from "@mui/material"; // Removed 'colors' since it's unused
import { useEffect, useState } from "react";

const UserForm = ({addUser,updateUser,submitted,data,isEdit}) => {
    const [id, setId] = useState(0);
    const [name, setName] =useState('');

    useEffect(()=> {
      if(!submitted){
          setId(0);
          setName('');
      }
  },[submitted]);

    useEffect(() => {
      if(data?.id && data.id !==0 ) {
        setId(data.id);
        setName(data.name);

      }
    },[data]);

  

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#ffffff',
        marginBottom: '30px',
        display: 'block',
      }}
    >
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: '#000000' }}>User Form</Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: '400px' }}
          value={id}
          onChange={e => setId(e.target.value)} // Placeholder for onChange handler
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: '400px' }}
          value={name}
          onChange={e =>  setName(e.target.value)} // Placeholder for onChange handler
        />
      </Grid>

      <button
        style={{
          margin: 'auto',
          marginBottom: '20px',
          backgroundColor: '#00c6e6',
          color: '#000000',
          marginLeft: '15px',
          marginTop: '20px',
          cursor: 'pointer',
          border:'1px',
          borderRadius:'10',
        }}
        onMouseOver={e => e.currentTarget.style.opacity = 0.7}
        onMouseOut={e => e.currentTarget.style.opacity = 1}

        onClick={() => isEdit ? updateUser({id,name}) : addUser({id,name})}
      >
        {
          isEdit ? 'Update' : 'Add'
        }
      </button>
    </Grid>
  );
};

export default UserForm;
