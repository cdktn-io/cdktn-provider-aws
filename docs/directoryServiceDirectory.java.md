# `directoryServiceDirectory` Submodule <a name="`directoryServiceDirectory` Submodule" id="@cdktn/provider-aws.directoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectory <a name="DirectoryServiceDirectory" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .password(java.lang.String)
//  .alias(java.lang.String)
//  .connectSettings(DirectoryServiceDirectoryConnectSettings)
//  .description(java.lang.String)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .edition(java.lang.String)
//  .enableDirectoryDataAccess(java.lang.Boolean|IResolvable)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .shortName(java.lang.String)
//  .size(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceDirectoryTimeouts)
//  .type(java.lang.String)
//  .vpcSettings(DirectoryServiceDirectoryVpcSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings">connectSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableDirectoryDataAccess">enableDirectoryDataAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_directory_data_access DirectoryServiceDirectory#enable_directory_data_access}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connectSettings`<sup>Optional</sup> <a name="connectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enableDirectoryDataAccess`<sup>Optional</sup> <a name="enableDirectoryDataAccess" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableDirectoryDataAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_directory_data_access DirectoryServiceDirectory#enable_directory_data_access}.

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#region DirectoryServiceDirectory#region}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpcSettings`<sup>Optional</sup> <a name="vpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings">putConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings">resetConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers">resetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableDirectoryDataAccess">resetEnableDirectoryDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings">resetVpcSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectSettings` <a name="putConnectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings"></a>

```java
public void putConnectSettings(DirectoryServiceDirectoryConnectSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceDirectoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings"></a>

```java
public void putVpcSettings(DirectoryServiceDirectoryVpcSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetConnectSettings` <a name="resetConnectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings"></a>

```java
public void resetConnectSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredNumberOfDomainControllers` <a name="resetDesiredNumberOfDomainControllers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers"></a>

```java
public void resetDesiredNumberOfDomainControllers()
```

##### `resetEdition` <a name="resetEdition" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetEnableDirectoryDataAccess` <a name="resetEnableDirectoryDataAccess" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableDirectoryDataAccess"></a>

```java
public void resetEnableDirectoryDataAccess()
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso"></a>

```java
public void resetEnableSso()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize"></a>

```java
public void resetSize()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType"></a>

```java
public void resetType()
```

##### `resetVpcSettings` <a name="resetVpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings"></a>

```java
public void resetVpcSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryServiceDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectoryServiceDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryServiceDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryServiceDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl">accessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput">connectSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput">desiredNumberOfDomainControllersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableDirectoryDataAccessInput">enableDirectoryDataAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput">enableSsoInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableDirectoryDataAccess">enableDirectoryDataAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl"></a>

```java
public java.lang.String getAccessUrl();
```

- *Type:* java.lang.String

---

##### `connectSettings`<sup>Required</sup> <a name="connectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings"></a>

```java
public DirectoryServiceDirectoryConnectSettingsOutputReference getConnectSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a>

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts"></a>

```java
public DirectoryServiceDirectoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings"></a>

```java
public DirectoryServiceDirectoryVpcSettingsOutputReference getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `connectSettingsInput`<sup>Optional</sup> <a name="connectSettingsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput"></a>

```java
public DirectoryServiceDirectoryConnectSettings getConnectSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="desiredNumberOfDomainControllersInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllersInput();
```

- *Type:* java.lang.Number

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enableDirectoryDataAccessInput`<sup>Optional</sup> <a name="enableDirectoryDataAccessInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableDirectoryDataAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableDirectoryDataAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSsoInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput"></a>

```java
public IResolvable|DirectoryServiceDirectoryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput"></a>

```java
public DirectoryServiceDirectoryVpcSettings getVpcSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredNumberOfDomainControllers`<sup>Required</sup> <a name="desiredNumberOfDomainControllers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enableDirectoryDataAccess`<sup>Required</sup> <a name="enableDirectoryDataAccess" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableDirectoryDataAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDirectoryDataAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectoryConfig <a name="DirectoryServiceDirectoryConfig" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryConfig;

DirectoryServiceDirectoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .password(java.lang.String)
//  .alias(java.lang.String)
//  .connectSettings(DirectoryServiceDirectoryConnectSettings)
//  .description(java.lang.String)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .edition(java.lang.String)
//  .enableDirectoryDataAccess(java.lang.Boolean|IResolvable)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .shortName(java.lang.String)
//  .size(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceDirectoryTimeouts)
//  .type(java.lang.String)
//  .vpcSettings(DirectoryServiceDirectoryVpcSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableDirectoryDataAccess">enableDirectoryDataAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_directory_data_access DirectoryServiceDirectory#enable_directory_data_access}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connectSettings`<sup>Optional</sup> <a name="connectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings"></a>

```java
public DirectoryServiceDirectoryConnectSettings getConnectSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enableDirectoryDataAccess`<sup>Optional</sup> <a name="enableDirectoryDataAccess" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableDirectoryDataAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDirectoryDataAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_directory_data_access DirectoryServiceDirectory#enable_directory_data_access}.

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#region DirectoryServiceDirectory#region}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts"></a>

```java
public DirectoryServiceDirectoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpcSettings`<sup>Optional</sup> <a name="vpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings"></a>

```java
public DirectoryServiceDirectoryVpcSettings getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

### DirectoryServiceDirectoryConnectSettings <a name="DirectoryServiceDirectoryConnectSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryConnectSettings;

DirectoryServiceDirectoryConnectSettings.builder()
    .customerDnsIps(java.util.List<java.lang.String>)
    .customerUsername(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps">customerDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername">customerUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername"></a>

```java
public java.lang.String getCustomerUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

### DirectoryServiceDirectoryTimeouts <a name="DirectoryServiceDirectoryTimeouts" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryTimeouts;

DirectoryServiceDirectoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#create DirectoryServiceDirectory#create}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#delete DirectoryServiceDirectory#delete}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#update DirectoryServiceDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#create DirectoryServiceDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#update DirectoryServiceDirectory#update}.

---

### DirectoryServiceDirectoryVpcSettings <a name="DirectoryServiceDirectoryVpcSettings" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryVpcSettings;

DirectoryServiceDirectoryVpcSettings.builder()
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectoryConnectSettingsOutputReference <a name="DirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryConnectSettingsOutputReference;

new DirectoryServiceDirectoryConnectSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connectIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput">customerDnsIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput">customerUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customerDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectIps`<sup>Required</sup> <a name="connectIps" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```java
public java.util.List<java.lang.String> getConnectIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerDnsIpsInput`<sup>Optional</sup> <a name="customerDnsIpsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerUsernameInput`<sup>Optional</sup> <a name="customerUsernameInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput"></a>

```java
public java.lang.String getCustomerUsernameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```java
public java.lang.String getCustomerUsername();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```java
public DirectoryServiceDirectoryConnectSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---


### DirectoryServiceDirectoryTimeoutsOutputReference <a name="DirectoryServiceDirectoryTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryTimeoutsOutputReference;

new DirectoryServiceDirectoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryServiceDirectoryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---


### DirectoryServiceDirectoryVpcSettingsOutputReference <a name="DirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory.DirectoryServiceDirectoryVpcSettingsOutputReference;

new DirectoryServiceDirectoryVpcSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```java
public DirectoryServiceDirectoryVpcSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---



