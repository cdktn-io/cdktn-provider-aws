# `quicksightAccountSubscription` Submodule <a name="`quicksightAccountSubscription` Submodule" id="@cdktn/provider-aws.quicksightAccountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSubscription <a name="QuicksightAccountSubscription" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscription;

QuicksightAccountSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .authenticationMethod(java.lang.String)
    .edition(java.lang.String)
    .notificationEmail(java.lang.String)
//  .activeDirectoryName(java.lang.String)
//  .adminGroup(java.util.List<java.lang.String>)
//  .adminProGroup(java.util.List<java.lang.String>)
//  .authorGroup(java.util.List<java.lang.String>)
//  .authorProGroup(java.util.List<java.lang.String>)
//  .awsAccountId(java.lang.String)
//  .contactNumber(java.lang.String)
//  .directoryId(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .iamIdentityCenterInstanceArn(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .readerGroup(java.util.List<java.lang.String>)
//  .readerProGroup(java.util.List<java.lang.String>)
//  .realm(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(QuicksightAccountSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.activeDirectoryName">activeDirectoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminGroup">adminGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminProGroup">adminProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_pro_group QuicksightAccountSubscription#admin_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorGroup">authorGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorProGroup">authorProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_pro_group QuicksightAccountSubscription#author_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.contactNumber">contactNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerGroup">readerGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerProGroup">readerProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_pro_group QuicksightAccountSubscription#reader_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.realm">realm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authenticationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `activeDirectoryName`<sup>Optional</sup> <a name="activeDirectoryName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.activeDirectoryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `adminGroup`<sup>Optional</sup> <a name="adminGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `adminProGroup`<sup>Optional</sup> <a name="adminProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminProGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_pro_group QuicksightAccountSubscription#admin_pro_group}.

---

##### `authorGroup`<sup>Optional</sup> <a name="authorGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `authorProGroup`<sup>Optional</sup> <a name="authorProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorProGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_pro_group QuicksightAccountSubscription#author_pro_group}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `contactNumber`<sup>Optional</sup> <a name="contactNumber" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.contactNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.iamIdentityCenterInstanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `readerGroup`<sup>Optional</sup> <a name="readerGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `readerProGroup`<sup>Optional</sup> <a name="readerProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerProGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_pro_group QuicksightAccountSubscription#reader_pro_group}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.realm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#region QuicksightAccountSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName">resetActiveDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup">resetAdminGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminProGroup">resetAdminProGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup">resetAuthorGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorProGroup">resetAuthorProGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber">resetContactNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn">resetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup">resetReaderGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderProGroup">resetReaderProGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm">resetRealm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts"></a>

```java
public void putTimeouts(QuicksightAccountSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `resetActiveDirectoryName` <a name="resetActiveDirectoryName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName"></a>

```java
public void resetActiveDirectoryName()
```

##### `resetAdminGroup` <a name="resetAdminGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup"></a>

```java
public void resetAdminGroup()
```

##### `resetAdminProGroup` <a name="resetAdminProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminProGroup"></a>

```java
public void resetAdminProGroup()
```

##### `resetAuthorGroup` <a name="resetAuthorGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup"></a>

```java
public void resetAuthorGroup()
```

##### `resetAuthorProGroup` <a name="resetAuthorProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorProGroup"></a>

```java
public void resetAuthorProGroup()
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetContactNumber` <a name="resetContactNumber" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber"></a>

```java
public void resetContactNumber()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetIamIdentityCenterInstanceArn` <a name="resetIamIdentityCenterInstanceArn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn"></a>

```java
public void resetIamIdentityCenterInstanceArn()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetReaderGroup` <a name="resetReaderGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup"></a>

```java
public void resetReaderGroup()
```

##### `resetReaderProGroup` <a name="resetReaderProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderProGroup"></a>

```java
public void resetReaderProGroup()
```

##### `resetRealm` <a name="resetRealm" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm"></a>

```java
public void resetRealm()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAccountSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscription;

QuicksightAccountSubscription.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscription;

QuicksightAccountSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscription;

QuicksightAccountSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscription;

QuicksightAccountSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightAccountSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightAccountSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightAccountSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightAccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus">accountSubscriptionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput">activeDirectoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput">adminGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminProGroupInput">adminProGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput">authorGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorProGroupInput">authorProGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput">contactNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput">iamIdentityCenterInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput">readerGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerProGroupInput">readerProGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput">realmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName">activeDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup">adminGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminProGroup">adminProGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup">authorGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorProGroup">authorProGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber">contactNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup">readerGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerProGroup">readerProGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm">realm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountSubscriptionStatus`<sup>Required</sup> <a name="accountSubscriptionStatus" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus"></a>

```java
public java.lang.String getAccountSubscriptionStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts"></a>

```java
public QuicksightAccountSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryNameInput`<sup>Optional</sup> <a name="activeDirectoryNameInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput"></a>

```java
public java.lang.String getActiveDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `adminGroupInput`<sup>Optional</sup> <a name="adminGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput"></a>

```java
public java.util.List<java.lang.String> getAdminGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminProGroupInput`<sup>Optional</sup> <a name="adminProGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminProGroupInput"></a>

```java
public java.util.List<java.lang.String> getAdminProGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `authorGroupInput`<sup>Optional</sup> <a name="authorGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput"></a>

```java
public java.util.List<java.lang.String> getAuthorGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorProGroupInput`<sup>Optional</sup> <a name="authorProGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorProGroupInput"></a>

```java
public java.util.List<java.lang.String> getAuthorProGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `contactNumberInput`<sup>Optional</sup> <a name="contactNumberInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput"></a>

```java
public java.lang.String getContactNumberInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `iamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArnInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `readerGroupInput`<sup>Optional</sup> <a name="readerGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput"></a>

```java
public java.util.List<java.lang.String> getReaderGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readerProGroupInput`<sup>Optional</sup> <a name="readerProGroupInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerProGroupInput"></a>

```java
public java.util.List<java.lang.String> getReaderProGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput"></a>

```java
public java.lang.String getRealmInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput"></a>

```java
public IResolvable|QuicksightAccountSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `activeDirectoryName`<sup>Required</sup> <a name="activeDirectoryName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName"></a>

```java
public java.lang.String getActiveDirectoryName();
```

- *Type:* java.lang.String

---

##### `adminGroup`<sup>Required</sup> <a name="adminGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup"></a>

```java
public java.util.List<java.lang.String> getAdminGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminProGroup`<sup>Required</sup> <a name="adminProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminProGroup"></a>

```java
public java.util.List<java.lang.String> getAdminProGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `authorGroup`<sup>Required</sup> <a name="authorGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup"></a>

```java
public java.util.List<java.lang.String> getAuthorGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorProGroup`<sup>Required</sup> <a name="authorProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorProGroup"></a>

```java
public java.util.List<java.lang.String> getAuthorProGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `contactNumber`<sup>Required</sup> <a name="contactNumber" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber"></a>

```java
public java.lang.String getContactNumber();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `iamIdentityCenterInstanceArn`<sup>Required</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

##### `readerGroup`<sup>Required</sup> <a name="readerGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup"></a>

```java
public java.util.List<java.lang.String> getReaderGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readerProGroup`<sup>Required</sup> <a name="readerProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerProGroup"></a>

```java
public java.util.List<java.lang.String> getReaderProGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSubscriptionConfig <a name="QuicksightAccountSubscriptionConfig" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscriptionConfig;

QuicksightAccountSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .authenticationMethod(java.lang.String)
    .edition(java.lang.String)
    .notificationEmail(java.lang.String)
//  .activeDirectoryName(java.lang.String)
//  .adminGroup(java.util.List<java.lang.String>)
//  .adminProGroup(java.util.List<java.lang.String>)
//  .authorGroup(java.util.List<java.lang.String>)
//  .authorProGroup(java.util.List<java.lang.String>)
//  .awsAccountId(java.lang.String)
//  .contactNumber(java.lang.String)
//  .directoryId(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .iamIdentityCenterInstanceArn(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .readerGroup(java.util.List<java.lang.String>)
//  .readerProGroup(java.util.List<java.lang.String>)
//  .realm(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(QuicksightAccountSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName">activeDirectoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup">adminGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminProGroup">adminProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_pro_group QuicksightAccountSubscription#admin_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup">authorGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorProGroup">authorProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_pro_group QuicksightAccountSubscription#author_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber">contactNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup">readerGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerProGroup">readerProGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_pro_group QuicksightAccountSubscription#reader_pro_group}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm">realm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `activeDirectoryName`<sup>Optional</sup> <a name="activeDirectoryName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName"></a>

```java
public java.lang.String getActiveDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `adminGroup`<sup>Optional</sup> <a name="adminGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup"></a>

```java
public java.util.List<java.lang.String> getAdminGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `adminProGroup`<sup>Optional</sup> <a name="adminProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminProGroup"></a>

```java
public java.util.List<java.lang.String> getAdminProGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#admin_pro_group QuicksightAccountSubscription#admin_pro_group}.

---

##### `authorGroup`<sup>Optional</sup> <a name="authorGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup"></a>

```java
public java.util.List<java.lang.String> getAuthorGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `authorProGroup`<sup>Optional</sup> <a name="authorProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorProGroup"></a>

```java
public java.util.List<java.lang.String> getAuthorProGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#author_pro_group QuicksightAccountSubscription#author_pro_group}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `contactNumber`<sup>Optional</sup> <a name="contactNumber" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber"></a>

```java
public java.lang.String getContactNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `readerGroup`<sup>Optional</sup> <a name="readerGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup"></a>

```java
public java.util.List<java.lang.String> getReaderGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `readerProGroup`<sup>Optional</sup> <a name="readerProGroup" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerProGroup"></a>

```java
public java.util.List<java.lang.String> getReaderProGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#reader_pro_group QuicksightAccountSubscription#reader_pro_group}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#region QuicksightAccountSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts"></a>

```java
public QuicksightAccountSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

### QuicksightAccountSubscriptionTimeouts <a name="QuicksightAccountSubscriptionTimeouts" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscriptionTimeouts;

QuicksightAccountSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSubscriptionTimeoutsOutputReference <a name="QuicksightAccountSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.quicksight_account_subscription.QuicksightAccountSubscriptionTimeoutsOutputReference;

new QuicksightAccountSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAccountSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---



