import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'





const CountriesList = () => (
  <Query
    query={gql`
    {
          countries {
            name
            code
          }
        }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.countries.map(({ name, id }) => (
        <div>
          <p>{name}{id}</p>
        </div>
      ));
    }}
  </Query>
)

export default CountriesList


// const test = gql`
//   {
//     countries {
//       name
//       code
//     }
//   }
// `

// const CountriesList = (props) => {
//   console.log(props)
//   return <p>trst</p>
// }


// export default graphql(test)(CountriesList)
