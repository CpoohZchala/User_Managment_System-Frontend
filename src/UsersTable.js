import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({rows,selectedUser,deleteUser})=>{
    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                   <TableCell>ID</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Actions</TableCell>
                   

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td,&:last-child th':{border:0}}}>
                        <TableCell component='th' scope = "row">{row.id}</TableCell>
                        <TableCell component='th' scope = "row">{row.name}</TableCell>
                        <TableCell>
                        <button
  style={{
    margin: 'auto',
    marginBottom: '20px',
    backgroundColor: '#8fbc8f',
    color: '#1d2951 ',
    marginLeft: '2px',
    marginTop: '20px',
    cursor: 'pointer',
    border: '0.5px',
    borderRadius: '5px',
    padding: '5px 10px',
  }}
  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
  onClick={() => selectedUser({ id: row.id, name: row.name })}
>
  Update
</button>
<button
  style={{
    margin: 'auto',
    marginBottom: '20px',
    backgroundColor: '#8fbc8f',
    color: '#1d2951 ',
    marginLeft: '5px',
    marginTop: '20px',
    cursor: 'pointer',
    border: '0.5px',
    borderRadius: '5px',
    padding: '5px 10px',
  }}
  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
  onClick={() => deleteUser({ id: row.id })}
>
  Delete
</button>
                        </TableCell>
                        </TableRow> 
                    )) :(
                        <TableRow  sx={{'&:last-child td,&:last-child th':{border:0}}}>
                        <TableCell component='th' scope = "row">No Data</TableCell>
                        </TableRow>

                    )


                }

            </TableBody>
        </Table>

    </TableContainer>
    );


}

export default UserTable;