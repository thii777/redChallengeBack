import * as Yup from 'yup';
import Form from '../models/Form';

class FormController {
    async store(req, res) {
        const schemaName = Yup.object().shape({
            name: Yup.string()
                .min(10)
                .required(),
        });
        if (!(await schemaName.isValid(req.body))) {
            return res.status(422).json({ error: 'invalid name' });
        }

        const schemaEmail = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
        });
        if (!(await schemaEmail.isValid(req.body))) {
            return res.status(422).json({ error: 'invalid email' });
        }

        const { name, email } = req.body;
        const client = await Form.create({ name, email });
        return res.json(client);
    }
}

export default new FormController();
