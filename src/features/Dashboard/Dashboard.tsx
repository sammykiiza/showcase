import MainLayout from '../Layouts/MainLayout'

function Dashboard() {

  const columns = [
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
];

const data = [
    {   
        value: 'value1',
        cell: 'test'
    },
    {
        value: 'value2',
        cell: 'test'
    },
    {
        value: 'value3',
        cell: 'test'
    },
    {
        value: 'value4',
        cell: 'test'
    }
]
  return (
    <>
      <MainLayout component='Dashboard view'>
        <span>Dashboard</span>
      </MainLayout>
    </>
  )
}

export default Dashboard