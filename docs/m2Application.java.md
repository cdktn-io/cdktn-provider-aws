# `m2Application` Submodule <a name="`m2Application` Submodule" id="@cdktn/provider-aws.m2Application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### M2Application <a name="M2Application" id="@cdktn/provider-aws.m2Application.M2Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application aws_m2_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Application.M2Application.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2Application;

M2Application.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineType(java.lang.String)
    .name(java.lang.String)
//  .definition(IResolvable|java.util.List<M2ApplicationDefinition>)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(M2ApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#engine_type M2Application#engine_type}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#name M2Application#name}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.definition">definition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>></code> | definition block. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#description M2Application#description}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#kms_key_id M2Application#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#role_arn M2Application#role_arn}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#tags M2Application#tags}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.engineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#engine_type M2Application#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#name M2Application#name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.definition"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>>

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#definition M2Application#definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#description M2Application#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#kms_key_id M2Application#kms_key_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#region M2Application#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#role_arn M2Application#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#tags M2Application#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Application.M2Application.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#timeouts M2Application#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Application.M2Application.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.m2Application.M2Application.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.m2Application.M2Application.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.m2Application.M2Application.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.m2Application.M2Application.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Application.M2Application.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.m2Application.M2Application.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.m2Application.M2Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.m2Application.M2Application.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.m2Application.M2Application.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.m2Application.M2Application.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.m2Application.M2Application.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.m2Application.M2Application.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.m2Application.M2Application.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.m2Application.M2Application.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.m2Application.M2Application.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Application.M2Application.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Application.M2Application.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Application.M2Application.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.m2Application.M2Application.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Application.M2Application.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.m2Application.M2Application.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.m2Application.M2Application.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.m2Application.M2Application.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.m2Application.M2Application.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Application.M2Application.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-aws.m2Application.M2Application.putDefinition"></a>

```java
public void putDefinition(IResolvable|java.util.List<M2ApplicationDefinition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Application.M2Application.putDefinition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.m2Application.M2Application.putTimeouts"></a>

```java
public void putTimeouts(M2ApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Application.M2Application.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a>

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-aws.m2Application.M2Application.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.m2Application.M2Application.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.m2Application.M2Application.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.m2Application.M2Application.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-aws.m2Application.M2Application.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.m2Application.M2Application.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.m2Application.M2Application.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a M2Application resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.m2Application.M2Application.isConstruct"></a>

```java
import io.cdktn.providers.aws.m2_application.M2Application;

M2Application.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Application.M2Application.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.m2Application.M2Application.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.m2_application.M2Application;

M2Application.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Application.M2Application.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.m2Application.M2Application.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.m2_application.M2Application;

M2Application.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Application.M2Application.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.m2_application.M2Application;

M2Application.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),M2Application.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a M2Application resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the M2Application to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing M2Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Application.M2Application.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the M2Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.currentVersion">currentVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList">M2ApplicationDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference">M2ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.definitionInput">definitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.m2Application.M2Application.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.m2Application.M2Application.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Application.M2Application.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.m2Application.M2Application.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.m2Application.M2Application.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.m2Application.M2Application.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.m2Application.M2Application.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Application.M2Application.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Application.M2Application.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Application.M2Application.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Application.M2Application.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Application.M2Application.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Application.M2Application.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Application.M2Application.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-aws.m2Application.M2Application.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.m2Application.M2Application.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-aws.m2Application.M2Application.property.currentVersion"></a>

```java
public java.lang.Number getCurrentVersion();
```

- *Type:* java.lang.Number

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.m2Application.M2Application.property.definition"></a>

```java
public M2ApplicationDefinitionList getDefinition();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList">M2ApplicationDefinitionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Application.M2Application.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.m2Application.M2Application.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Application.M2Application.property.timeouts"></a>

```java
public M2ApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference">M2ApplicationTimeoutsOutputReference</a>

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-aws.m2Application.M2Application.property.definitionInput"></a>

```java
public IResolvable|java.util.List<M2ApplicationDefinition> getDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.m2Application.M2Application.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktn/provider-aws.m2Application.M2Application.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.m2Application.M2Application.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.m2Application.M2Application.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.m2Application.M2Application.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.m2Application.M2Application.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.m2Application.M2Application.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.m2Application.M2Application.property.timeoutsInput"></a>

```java
public IResolvable|M2ApplicationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.m2Application.M2Application.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Application.M2Application.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Application.M2Application.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Application.M2Application.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.m2Application.M2Application.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.m2Application.M2Application.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.m2Application.M2Application.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2Application.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.m2Application.M2Application.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### M2ApplicationConfig <a name="M2ApplicationConfig" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationConfig;

M2ApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineType(java.lang.String)
    .name(java.lang.String)
//  .definition(IResolvable|java.util.List<M2ApplicationDefinition>)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(M2ApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#engine_type M2Application#engine_type}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#name M2Application#name}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.definition">definition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>></code> | definition block. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#description M2Application#description}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#kms_key_id M2Application#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#role_arn M2Application#role_arn}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#tags M2Application#tags}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#engine_type M2Application#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#name M2Application#name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.definition"></a>

```java
public IResolvable|java.util.List<M2ApplicationDefinition> getDefinition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>>

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#definition M2Application#definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#description M2Application#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#kms_key_id M2Application#kms_key_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#region M2Application#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#role_arn M2Application#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#tags M2Application#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Application.M2ApplicationConfig.property.timeouts"></a>

```java
public M2ApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#timeouts M2Application#timeouts}

---

### M2ApplicationDefinition <a name="M2ApplicationDefinition" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinition.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationDefinition;

M2ApplicationDefinition.builder()
//  .content(java.lang.String)
//  .s3Location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#content M2Application#content}. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition.property.s3Location">s3Location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#s3_location M2Application#s3_location}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinition.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#content M2Application#content}.

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinition.property.s3Location"></a>

```java
public java.lang.String getS3Location();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#s3_location M2Application#s3_location}.

---

### M2ApplicationTimeouts <a name="M2ApplicationTimeouts" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationTimeouts;

M2ApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#create M2Application#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#delete M2Application#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/m2_application#update M2Application#update}

---

## Classes <a name="Classes" id="Classes"></a>

### M2ApplicationDefinitionList <a name="M2ApplicationDefinitionList" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationDefinitionList;

new M2ApplicationDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.get"></a>

```java
public M2ApplicationDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<M2ApplicationDefinition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>>

---


### M2ApplicationDefinitionOutputReference <a name="M2ApplicationDefinitionOutputReference" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationDefinitionOutputReference;

new M2ApplicationDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.resetS3Location"></a>

```java
public void resetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.s3Location">s3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.s3LocationInput"></a>

```java
public java.lang.String getS3LocationInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.s3Location"></a>

```java
public java.lang.String getS3Location();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Application.M2ApplicationDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|M2ApplicationDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationDefinition">M2ApplicationDefinition</a>

---


### M2ApplicationTimeoutsOutputReference <a name="M2ApplicationTimeoutsOutputReference" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_application.M2ApplicationTimeoutsOutputReference;

new M2ApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Application.M2ApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|M2ApplicationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Application.M2ApplicationTimeouts">M2ApplicationTimeouts</a>

---



