describe('testes API ', () => {
  
  var TokenResposta;
  
    it('Autentica com sucesso na API', () => {
      cy.request({
        method: 'POST',
        url: 'https://hmlapi.angellira.com.br/freight-management/v1/login/335111',
        body: {
          username: "82858981051",
          password: "Jeni1312@"
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.body.access_token).to.exist
        TokenResposta = response.body.access_token
     })
        
    })
  
    it('Puxar dados básicos', () => {
      
      cy.request({
        method: 'GET',
        url: 'https://hmlapi.angellira.com.br/registration/driver/335111',
        headers: {
          'Authorization': TokenResposta
        }
      })
      .then(response => cy.log(response))
      //colocar para aparecer os components
  
    })
  
  
      it('Adicionando um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://hmlapi.angellira.com.br/registration/driver/335111',
        body: {

          "cpf": "78178009013",
          "name": "Jeniffer Souza",
          "rg": "307811943",
          "whatsapp": "49999926587",
          "email": "cludad@gmail.com",
          "password":"Jeni1312@",
          "relationshipType": [
              2,
              61
          ]
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        expect(response.status).to.eq(200);
      })
    })
  
  
  })