import React, {useState, useEffect} from "react";
import { Container, Select } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import getFieldsService from '../../services/getFieldsService';

const ReportsByTestsFields = () => {
    const navigation = useNavigate();
    const [fields, setFields] = useState([]);
    
    useEffect(async () => {
        var fieldsData = await getFieldsService.getFields();
        fieldsData.data.map((f) => {
          setFields((prevState) => [
            ...prevState,
            { key: f.fieldName, value: f.fieldName, text: f.fieldName }
          ]);
        });
      }, []);

      const onSelectFieldHandler = (e) => {
        navigation(`/tests?field=${e.target.innerText}`);
      };

      return(
        <Container textAlign="left">
        <Select
          options={fields}
          selection
          placeholder="Select a Field"
          onChange={onSelectFieldHandler}
        ></Select>
      </Container>
      )
}

export default ReportsByTestsFields