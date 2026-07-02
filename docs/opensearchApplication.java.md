# `opensearchApplication` Submodule <a name="`opensearchApplication` Submodule" id="@cdktn/provider-aws.opensearchApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchApplication <a name="OpensearchApplication" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application aws_opensearch_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplication;

OpensearchApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appConfig(IResolvable|java.util.List<OpensearchApplicationAppConfig>)
//  .dataSource(IResolvable|java.util.List<OpensearchApplicationDataSource>)
//  .iamIdentityCenterOptions(IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions>)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#name OpensearchApplication#name}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.appConfig">appConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>></code> | app_config block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dataSource">dataSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>></code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>></code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#name OpensearchApplication#name}.

---

##### `appConfig`<sup>Optional</sup> <a name="appConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.appConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>>

app_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dataSource"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>>

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>>

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#region OpensearchApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig">putAppConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions">putIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig">resetAppConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions">resetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppConfig` <a name="putAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig"></a>

```java
public void putAppConfig(IResolvable|java.util.List<OpensearchApplicationAppConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>>

---

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource"></a>

```java
public void putDataSource(IResolvable|java.util.List<OpensearchApplicationDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>>

---

##### `putIamIdentityCenterOptions` <a name="putIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions"></a>

```java
public void putIamIdentityCenterOptions(IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts"></a>

```java
public void putTimeouts(OpensearchApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---

##### `resetAppConfig` <a name="resetAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig"></a>

```java
public void resetAppConfig()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetIamIdentityCenterOptions` <a name="resetIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions"></a>

```java
public void resetIamIdentityCenterOptions()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplication;

OpensearchApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplication;

OpensearchApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplication;

OpensearchApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplication;

OpensearchApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig">appConfig</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput">appConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput">dataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput">iamIdentityCenterOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appConfig`<sup>Required</sup> <a name="appConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig"></a>

```java
public OpensearchApplicationAppConfigList getAppConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource"></a>

```java
public OpensearchApplicationDataSourceList getDataSource();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `iamIdentityCenterOptions`<sup>Required</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions"></a>

```java
public OpensearchApplicationIamIdentityCenterOptionsList getIamIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts"></a>

```java
public OpensearchApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a>

---

##### `appConfigInput`<sup>Optional</sup> <a name="appConfigInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationAppConfig> getAppConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationDataSource> getDataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>>

---

##### `iamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="iamIdentityCenterOptionsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions> getIamIdentityCenterOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput"></a>

```java
public IResolvable|OpensearchApplicationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchApplicationAppConfig <a name="OpensearchApplicationAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationAppConfig;

OpensearchApplicationAppConfig.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#key OpensearchApplication#key}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#value OpensearchApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#key OpensearchApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#value OpensearchApplication#value}.

---

### OpensearchApplicationConfig <a name="OpensearchApplicationConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationConfig;

OpensearchApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appConfig(IResolvable|java.util.List<OpensearchApplicationAppConfig>)
//  .dataSource(IResolvable|java.util.List<OpensearchApplicationDataSource>)
//  .iamIdentityCenterOptions(IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions>)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#name OpensearchApplication#name}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig">appConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>></code> | app_config block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource">dataSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>></code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>></code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#name OpensearchApplication#name}.

---

##### `appConfig`<sup>Optional</sup> <a name="appConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationAppConfig> getAppConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>>

app_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationDataSource> getDataSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>>

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions> getIamIdentityCenterOptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>>

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#region OpensearchApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts"></a>

```java
public OpensearchApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}

---

### OpensearchApplicationDataSource <a name="OpensearchApplicationDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationDataSource;

OpensearchApplicationDataSource.builder()
//  .dataSourceArn(java.lang.String)
//  .dataSourceDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription">dataSourceDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}. |

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}.

---

##### `dataSourceDescription`<sup>Optional</sup> <a name="dataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription"></a>

```java
public java.lang.String getDataSourceDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}.

---

### OpensearchApplicationIamIdentityCenterOptions <a name="OpensearchApplicationIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationIamIdentityCenterOptions;

OpensearchApplicationIamIdentityCenterOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .iamIdentityCenterInstanceArn(java.lang.String)
//  .iamRoleForIdentityCenterApplicationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}.

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}.

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}.

---

### OpensearchApplicationTimeouts <a name="OpensearchApplicationTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationTimeouts;

OpensearchApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#create OpensearchApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#delete OpensearchApplication#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/opensearch_application#update OpensearchApplication#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchApplicationAppConfigList <a name="OpensearchApplicationAppConfigList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationAppConfigList;

new OpensearchApplicationAppConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get"></a>

```java
public OpensearchApplicationAppConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationAppConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>>

---


### OpensearchApplicationAppConfigOutputReference <a name="OpensearchApplicationAppConfigOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationAppConfigOutputReference;

new OpensearchApplicationAppConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchApplicationAppConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>

---


### OpensearchApplicationDataSourceList <a name="OpensearchApplicationDataSourceList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationDataSourceList;

new OpensearchApplicationDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get"></a>

```java
public OpensearchApplicationDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationDataSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>>

---


### OpensearchApplicationDataSourceOutputReference <a name="OpensearchApplicationDataSourceOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationDataSourceOutputReference;

new OpensearchApplicationDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription">resetDataSourceDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetDataSourceDescription` <a name="resetDataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription"></a>

```java
public void resetDataSourceDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput">dataSourceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription">dataSourceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `dataSourceDescriptionInput`<sup>Optional</sup> <a name="dataSourceDescriptionInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput"></a>

```java
public java.lang.String getDataSourceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `dataSourceDescription`<sup>Required</sup> <a name="dataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription"></a>

```java
public java.lang.String getDataSourceDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchApplicationDataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>

---


### OpensearchApplicationIamIdentityCenterOptionsList <a name="OpensearchApplicationIamIdentityCenterOptionsList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationIamIdentityCenterOptionsList;

new OpensearchApplicationIamIdentityCenterOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get"></a>

```java
public OpensearchApplicationIamIdentityCenterOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchApplicationIamIdentityCenterOptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>>

---


### OpensearchApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationIamIdentityCenterOptionsOutputReference;

new OpensearchApplicationIamIdentityCenterOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">resetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">resetIamRoleForIdentityCenterApplicationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIamIdentityCenterInstanceArn` <a name="resetIamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```java
public void resetIamIdentityCenterInstanceArn()
```

##### `resetIamRoleForIdentityCenterApplicationArn` <a name="resetIamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```java
public void resetIamRoleForIdentityCenterApplicationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn">iamIdentityCenterApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">iamIdentityCenterInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">iamRoleForIdentityCenterApplicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamIdentityCenterApplicationArn`<sup>Required</sup> <a name="iamIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn"></a>

```java
public java.lang.String getIamIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleForIdentityCenterApplicationArnInput`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArn`<sup>Required</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchApplicationIamIdentityCenterOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>

---


### OpensearchApplicationTimeoutsOutputReference <a name="OpensearchApplicationTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.opensearch_application.OpensearchApplicationTimeoutsOutputReference;

new OpensearchApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchApplicationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---



