# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-aws.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2;

SecurityhubConnectorV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .connectorProvider(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connectorProvider">connectorProvider</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>></code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `connectorProvider`<sup>Optional</sup> <a name="connectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connectorProvider"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>>

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider">putConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider">resetConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorProvider` <a name="putConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider"></a>

```java
public void putConnectorProvider(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>>

---

##### `resetConnectorProvider` <a name="resetConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider"></a>

```java
public void resetConnectorProvider()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2;

SecurityhubConnectorV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2;

SecurityhubConnectorV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2;

SecurityhubConnectorV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2;

SecurityhubConnectorV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubConnectorV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider">connectorProvider</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health">health</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput">connectorProviderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `connectorProvider`<sup>Required</sup> <a name="connectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider"></a>

```java
public SecurityhubConnectorV2ConnectorProviderList getConnectorProvider();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health"></a>

```java
public SecurityhubConnectorV2HealthList getHealth();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `connectorProviderInput`<sup>Optional</sup> <a name="connectorProviderInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider> getConnectorProviderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2Config;

SecurityhubConnectorV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .connectorProvider(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider">connectorProvider</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>></code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `connectorProvider`<sup>Optional</sup> <a name="connectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider> getConnectorProvider();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>>

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

### SecurityhubConnectorV2ConnectorProvider <a name="SecurityhubConnectorV2ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProvider;

SecurityhubConnectorV2ConnectorProvider.builder()
//  .jiraCloud(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderJiraCloud>)
//  .serviceNow(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderServiceNow>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud">jiraCloud</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>></code> | jira_cloud block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow">serviceNow</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>></code> | service_now block. |

---

##### `jiraCloud`<sup>Optional</sup> <a name="jiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderJiraCloud> getJiraCloud();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>>

jira_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderServiceNow> getServiceNow();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>>

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ConnectorProviderJiraCloud <a name="SecurityhubConnectorV2ConnectorProviderJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderJiraCloud;

SecurityhubConnectorV2ConnectorProviderJiraCloud.builder()
    .projectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}. |

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}.

---

### SecurityhubConnectorV2ConnectorProviderServiceNow <a name="SecurityhubConnectorV2ConnectorProviderServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderServiceNow;

SecurityhubConnectorV2ConnectorProviderServiceNow.builder()
    .instanceName(java.lang.String)
    .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}. |

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}.

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}.

---

### SecurityhubConnectorV2Health <a name="SecurityhubConnectorV2Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2Health;

SecurityhubConnectorV2Health.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2ConnectorProviderJiraCloudList <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderJiraCloudList;

new SecurityhubConnectorV2ConnectorProviderJiraCloudList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get"></a>

```java
public SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderJiraCloud> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>>

---


### SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference;

new SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus">authStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId">cloudId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authStatus`<sup>Required</sup> <a name="authStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus"></a>

```java
public java.lang.String getAuthStatus();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `cloudId`<sup>Required</sup> <a name="cloudId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId"></a>

```java
public java.lang.String getCloudId();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>

---


### SecurityhubConnectorV2ConnectorProviderList <a name="SecurityhubConnectorV2ConnectorProviderList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderList;

new SecurityhubConnectorV2ConnectorProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get"></a>

```java
public SecurityhubConnectorV2ConnectorProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProvider> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>>

---


### SecurityhubConnectorV2ConnectorProviderOutputReference <a name="SecurityhubConnectorV2ConnectorProviderOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderOutputReference;

new SecurityhubConnectorV2ConnectorProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud">putJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud">resetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJiraCloud` <a name="putJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud"></a>

```java
public void putJiraCloud(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderJiraCloud> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow"></a>

```java
public void putServiceNow(IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderServiceNow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>>

---

##### `resetJiraCloud` <a name="resetJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud"></a>

```java
public void resetJiraCloud()
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow"></a>

```java
public void resetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud">jiraCloud</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput">jiraCloudInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jiraCloud`<sup>Required</sup> <a name="jiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud"></a>

```java
public SecurityhubConnectorV2ConnectorProviderJiraCloudList getJiraCloud();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow"></a>

```java
public SecurityhubConnectorV2ConnectorProviderServiceNowList getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a>

---

##### `jiraCloudInput`<sup>Optional</sup> <a name="jiraCloudInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderJiraCloud> getJiraCloudInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderServiceNow> getServiceNowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorV2ConnectorProvider getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>

---


### SecurityhubConnectorV2ConnectorProviderServiceNowList <a name="SecurityhubConnectorV2ConnectorProviderServiceNowList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderServiceNowList;

new SecurityhubConnectorV2ConnectorProviderServiceNowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get"></a>

```java
public SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubConnectorV2ConnectorProviderServiceNow> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>>

---


### SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference <a name="SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference;

new SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus">authStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authStatus`<sup>Required</sup> <a name="authStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus"></a>

```java
public java.lang.String getAuthStatus();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>

---


### SecurityhubConnectorV2HealthList <a name="SecurityhubConnectorV2HealthList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2HealthList;

new SecurityhubConnectorV2HealthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get"></a>

```java
public SecurityhubConnectorV2HealthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecurityhubConnectorV2HealthOutputReference <a name="SecurityhubConnectorV2HealthOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_connector_v2.SecurityhubConnectorV2HealthOutputReference;

new SecurityhubConnectorV2HealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus">connectorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt">lastCheckedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus"></a>

```java
public java.lang.String getConnectorStatus();
```

- *Type:* java.lang.String

---

##### `lastCheckedAt`<sup>Required</sup> <a name="lastCheckedAt" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt"></a>

```java
public java.lang.String getLastCheckedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue"></a>

```java
public SecurityhubConnectorV2Health getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a>

---



