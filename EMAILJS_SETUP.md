# Configuration EmailJS pour le formulaire de contact

Le formulaire de contact utilise EmailJS pour envoyer les emails. Voici comment le configurer :

## Étapes de configuration

### 1. Créer un compte EmailJS (gratuit)

1. Visitez [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service d'email

1. Dans votre dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec les variables suivantes :
   - `{{from_name}}` - Le nom de l'expéditeur
   - `{{from_email}}` - L'email de l'expéditeur
   - `{{message}}` - Le message
   - `{{to_email}}` - Les destinataires

Exemple de template :
```
Nouveau message de {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Dans les paramètres du template, configurez **To Email** avec : `charline.petit@epitech.eu, paul.sinsoulieu@epitech.eu, yanis.ktab@epitech.eu`
5. Notez le **Template ID** (ex: `template_xyz789`)

### 4. Obtenir votre Public Key

1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key** (ex: `abc123xyz789`)

### 5. Configurer le projet

Ouvrez le fichier `src/components/Contact.jsx` et remplacez les placeholders :

```javascript
const result = await emailjs.send(
    'service_abc123',      // Remplacer par votre Service ID
    'template_xyz789',     // Remplacer par votre Template ID
    {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'charline.petit@epitech.eu, paul.sinsoulieu@epitech.eu, yanis.ktab@epitech.eu'
    },
    'abc123xyz789'         // Remplacer par votre Public Key
);
```

### 6. Tester le formulaire

1. Lancez le site en local : `npm run dev`
2. Remplissez le formulaire de contact
3. Vérifiez que l'email est bien reçu

## Limites du plan gratuit

- 200 emails par mois
- Pas de support prioritaire

Si vous avez besoin de plus, pensez à upgrader vers un plan payant.

## Troubleshooting

- **Erreur 401** : Vérifiez votre Public Key
- **Erreur 404** : Vérifiez vos Service ID et Template ID
- **Email non reçu** : Vérifiez vos spams et la configuration du template
