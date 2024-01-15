"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8902],{7049:t=>{t.exports=JSON.parse('{"name":"ntfy","url":"https://codeberg.org/l-x/woodpecker-ntfy","description":"plugin to send notifications to a ntfy.sh instance","docs":"<h1>woodpecker-ntfy</h1>\\n<p>A <a href=\\"https://woodpecker-ci.org/\\">Woodpecker</a> plugin to send notifications to a <a href=\\"http://ntfy.sh/\\">ntfy.sh</a> instance.</p>\\n<h2>Configuration</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Name</th>\\n<th>Description</th>\\n<th>Default</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>message</code></td>\\n<td>Notification Body</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>title</code></td>\\n<td>Notification Title <a href=\\"https://docs.ntfy.sh/publish/#message-title\\">^message-title</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>priority</code></td>\\n<td>Notification Priority <a href=\\"https://docs.ntfy.sh/publish/#message-priority\\">^message-priority</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>url</code></td>\\n<td>Url (including the topic) to send the notification to</td>\\n<td><code>https://ntfy.sh/woodpecker-ntfy</code></td>\\n</tr>\\n<tr>\\n<td><code>token</code></td>\\n<td>Authentication token for write-protected topics <a href=\\"https://docs.ntfy.sh/publish/#bearer-auth\\">^bearer-auth</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>actions</code></td>\\n<td>Action Buttons <a href=\\"https://docs.ntfy.sh/publish/#defining-actions\\">^defining-actions</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>attach</code></td>\\n<td>Url for file to be attached <a href=\\"https://docs.ntfy.sh/publish/#attach-file-from-a-url\\">^attach-file-from-a-url</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>call</code></td>\\n<td>Phone number to send voice message to <a href=\\"https://docs.ntfy.sh/publish/#phone-calls\\">^phone-calls</a> (ntfy &gt;= 2.5.0)</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>click</code></td>\\n<td>Click Action <a href=\\"https://docs.ntfy.sh/publish/#click-action\\">^click-action</a></td>\\n<td><code>CI_BUILD_LINK</code></td>\\n</tr>\\n<tr>\\n<td><code>email</code></td>\\n<td>E-mail to which the message is to be forwarded <a href=\\"https://docs.ntfy.sh/publish/#e-mail-notifications\\">^e-mail-notifications</a></td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>icon</code></td>\\n<td>Message Icon <a href=\\"https://docs.ntfy.sh/publish/#icons\\">^icons</a></td>\\n<td><code>CI_COMMIT_AUTHOR_AVATAR</code></td>\\n</tr>\\n<tr>\\n<td><code>tags</code></td>\\n<td>Tags and Emojis <a href=\\"https://docs.ntfy.sh/publish/#tags-emojis\\">^tags-emojis</a></td>\\n<td>none</td>\\n</tr>\\n</tbody></table>\\n<h2>Example</h2>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    ntfy:\\n        image: codeberg.org/l-x/woodpecker-ntfy\\n        settings:\\n            url: https://custom.ntfy.instance/topic-to-notify\\n            token:\\n                from_secret: your-super-secret-ntfy-access-token\\n            title: notification title\\n            priority: urgent\\n            actions: \\"view, Open portal, https://home.nest.com/, clear=true; http, Turn down, https://api.nest.com/, body=\'{\\\\\\"temperature\\\\\\": 65}\'\\"\\n            click: https://where.to.go\\n            icon: https://woodpecker-ci.org/img/logo.svg\\n            tags: robot,${CI_BUILD_EVENT},${CI_REPO_NAME}\\n            message: &gt;\\n                \ud83d\udcdd Commit by ${CI_COMMIT_AUTHOR} on ${CI_COMMIT_BRANCH}:\\n\\n                ${CI_COMMIT_MESSAGE}\\n</code></pre>\\n","tags":["trigger","notify"],"author":"l-x","containerImage":"codeberg.org/l-x/woodpecker-ntfy","containerImageUrl":"https://codeberg.org/l-x/-/packages/container/woodpecker-ntfy/latest","verified":false}')}}]);