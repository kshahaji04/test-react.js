# Shilpi-jewels Application

# Master Tabs

## Client Group:

### Creating new Client Group

- The `AddClientGroup` component allows users to create a new client group.

### Common components

The `SingleItemAdd` is a reusable React component that encapsulates an input field and a button. It can be used in various parts of the application to facilitate input and button functionality.

### Props

- **inputValue** (string): The current value of the input field.
- **handleInputValue** (function): A callback function invoked when the input field value changes.
- **handleSubmit** (function): A callback function invoked when the button is clicked.
- **error** (string): The mandatory fields error occurs.

### Example usage

```jsx
<SingleItemAdd
  inputValue={inputValue}
  handleInputValue={handleInputValue}
  error={error}
  handleSubmit={handleSubmit}
/>
```

### API Used

The create client group functionality in the `AddClientGroup` interacts with a backend API to save the new client group data. Below are the details of the API used:

- **Name**: AddClientGroupApi
- **Endpoint**: /api/resource/Client Group
- **Method**: POST
- **Request Payload**:
  - **title** (string): The name of the client group.
- **Response Payload**:
  - **description** (string): The description of the created client group.

## Client Group Listing :

## Client Group Filter Section

### Common components

The `MasterSingleListingSearch` is a reusable React component that consist of single input field which get user input value and also show total length of listing data.

### Props

- **placeholder** (string): The value displayed inside the input field as a placeholder.
- **handleSearchInput** (function): The callback function invoked when the user inputs search criteria.
- **listingData** (string): The filtered list of client groups based on the user's input value.
- **tableViewData** (string): The state used to calculate the length of the listingData state.

### Example usage

```jsx
<MasterSingleListingSearch
  placeholder="Client group"
  handleSearchInput={handleSearchInput}
  listingData={filterList}
  tableViewData={tableViewData}
/>
```

## Client Group Listing :

### Common components

The `SingleItemListingInMaster` is a reusable React component that used for the display the list of client group.

### Props

- **listingData** (string): The listing of Client Group.
- **handleTableViewRows** (function): A function that decides how many client groups will be listed.
- **tableViewData** (function): The state which store how many numbers of row to be listed.
- **heading** (string): The heading of relevant data.

### Example usage

```jsx
<SingleItemListingInMaster
  listingData={filterList}
  handleTableViewRows={handleTableViewRows}
  tableViewData={tableViewData}
  heading="Client Group"
/>
```

### GET API Used

Below are the details of the GET API used:

- **Name**: GetClientGroupList
- **Endpoint**: `/api/resource/ClientGroup`
- **Version**: v1
- **Method**: get_group
- **Entity**: client_group

The GET API is responsible for retrieving the list of client groups from the backend server.

## Client Name :

### Creating new Client

- The `ClientName` component allows users to create a new client.

- The `AddClient` is a React component that encapsulates an input field ,inputDropdown of Client Group and a button. It can be used in various parts of the application to facilitate input and button functionality.

### ClientName Component

### Client Filter Section

### Common component

The `MasterMultipleListingSearch` is a reusable React component that consist of multiple input field which get user input value and also show total length of listing data.

### Props

- **placeholder1** (string): The value displayed inside the first input field as a placeholder.
- **placeholder2** (string): The value displayed inside the second input field as a placeholder.
- **handleInputChange1** (function): The callback function invoked when the user inputs in first input field.
- **handleInputChange2** (function): The callback function invoked when the user inputs in first input field.
- **listingData** (string): The filtered list of client groups based on the user's input value.
- **tableViewData** (string): The state used to calculate the length of the listingData state.

### Example usage

```jsx
<MasterMultipleListingSearch
  placeholder1="Client name"
  placeholder2="Client group"
  handleInputChange1={handleInputChange1}
  handleInputChange2={handleInputChange2}
  listingData={filteredList}
  tableViewData={tableViewData}
/>
```

### Client Name Listing

- The `ClientNameListing` is a component that used for the display the list of client Name.

### Props

- **clientNameClientGroupList** (string): The filtered list of Client Group.
- **handleTableViewRows** (function): A function that decides how many client groups will be listed.
- **tableViewData** (function): The state which store how many numbers of row to be listed.

### Example usage

```jsx
<ClientNameListing
  clientNameClientGroupList={filteredList}
  tableViewData={tableViewData}
  handleTableViewRows={handleTableViewRows}
/>
```

### GET API Used

Below are the details of the GET API used:

- **Name**: getClientNameAndClientGrpApi
- **Endpoint**: `/api/method/challan.sdk.api?`
- **Version**: v1
- **Method**: get_client_group
- **Entity**: client_group_filter

The GET API is responsible for retrieving the list of client Name from the backend server.

### AddClient Component

### Common components

The `SelectedInputDropdown` is a reusable React component that combines an input field with a dropdown menu of selectable items. It provides users with a convenient way to enter input text and select from a list of options, facilitating data selection and filtering in various parts of the application.

### Props

- **drowpdownlist** (string): The list of options for dropdown.
- **placeholderValue** (string): The placeholder text displayed in the input field.
- **bgColor** (string): The Background color for the input field.
- **selectedDropdownValue** (string): The state that store the selected options.
- **setSelectedDropdownValue** (function): The state updater function returned by `useState` to update the selected option. A function to the selected options.
- **clientGroupList** (string): The state that store the client group list.
- **handleClientGroup** (function): The callback function invoked when the user select client group from dropdown options.
- **defaultData** (string): The text which is used for shows the default data of input field.
- **setStateForDocStatus** (function): The one type of state which is used for to dynamically changes button when user try to change the selected option.
- **title** (string): The Text which shows the title of input field.
- **readOnly** (string): A field that determines whether the value is set to true, indicating that the user cannot change the data, or false, indicating that the user can change the data.

### Example usage

```jsx
<SelectedInputDropdown
  drowpdownlist={dropDownList}
  bgColor={true}
  placeholderValue={'Client Group'}
  selectedDropdownValue={selectedDropdownValue}
  setSelectedDropdownValue={setSelectedDropdownValue}
  clientGroupList={clientGroupList}
  handleClientGroup={handleClientGroup}
  defaultData={defaultData}
  setStateForDocStatus={true}
  title={'input field'}
  readOnly={true}
/>
```

## Functions Used

### Function Name

handleInputField()

### Description

This function is an event handler that manages the behavior of an input field. Upon invocation, it performs the following tasks:

1. It sets the state variable showDropdown to true, indicating that the dropdown associated with the input field should be displayed.
2. It updates the state variable selectedDropdownValue with the value of the input field, retrieved from the event object.
3. This function handles the behavior of the input field, capturing user input, and checking if the input matches any of the dropdown options. Depending on the result, it updates the `setFilterDropdownList` state.

### Usage

```javascript
const handleInputField = () => {};
```

### Function Name

handleKeyDown()

### Description

This function is an event handler that manages keyboard events related to an input field. It checks for specific key presses and displayed dropdown accordingly.
