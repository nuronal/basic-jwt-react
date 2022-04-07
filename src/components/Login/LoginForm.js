import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from "react-hook-form"
import AuthService from '../../configs/services/AuthService'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log("datam", data)
        AuthService.Login(data)
            .then((res) => console.log(res.data))
    }

    return (
        <>
            <Card className='shadow p-1'
            >
                <CardBody>
                    <CardTitle tag="h5">
                        Hoşgeldiniz!
                    </CardTitle>
                    <CardText>
                        Sisteme bıt bıt ile giriniz.
                    </CardText>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label for="identityNo">TC Kimlik Numaranız</Label>
                            <Input
                                type="text"
                                id="identityNo"
                                name="identityNo"
                                innerRef={register({ required: "TC Kimlik numarasınızı giriniz." })}
                                placeholder="11111111111"
                                invalid={errors.identityNo && true}
                            />
                            {/* <div>
                                {
                                    errors.identityNo?.message
                                }
                            </div> */}
                        </FormGroup>
                        <FormGroup>
                            <Label for="serialNumber">Seri Numaranız</Label>
                            <Input
                                type="text"
                                id="serialNumber"
                                name="serialNumber"
                                innerRef={register({ required: "Seri numaranızı giriniz." })}
                                placeholder="111111111"
                                invalid={errors.serialNumber && true}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Şifreniz</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                innerRef={register({ required: "Şifrenizi giriniz." })}
                                placeholder="111111111"
                                invalid={errors.password && true}
                            />
                        </FormGroup>
                        <Row>
                            <Col >
                                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Button className="w-25 btn-sm" type="submit" style={{ backgroundColor: '#468f94' }} >
                                        Giriş
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>

                </CardBody>
            </Card>
        </>
    )
}

export default LoginForm