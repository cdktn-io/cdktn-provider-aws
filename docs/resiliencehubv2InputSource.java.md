# `resiliencehubv2InputSource` Submodule <a name="`resiliencehubv2InputSource` Submodule" id="@cdktn/provider-aws.resiliencehubv2InputSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2InputSource <a name="Resiliencehubv2InputSource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source aws_resiliencehubv2_input_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSource;

Resiliencehubv2InputSource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceArn(java.lang.String)
//  .region(java.lang.String)
//  .resourceConfiguration(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.resourceConfiguration">resourceConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>></code> | resource_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.serviceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#region Resiliencehubv2InputSource#region}

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.resourceConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>>

resource_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#resource_configuration Resiliencehubv2InputSource#resource_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration">putResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration">resetResourceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceConfiguration` <a name="putResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration"></a>

```java
public void putResourceConfiguration(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceConfiguration` <a name="resetResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration"></a>

```java
public void resetResourceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSource;

Resiliencehubv2InputSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSource;

Resiliencehubv2InputSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSource;

Resiliencehubv2InputSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSource;

Resiliencehubv2InputSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Resiliencehubv2InputSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Resiliencehubv2InputSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Resiliencehubv2InputSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2InputSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId">inputSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput">resourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput">serviceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inputSourceId`<sup>Required</sup> <a name="inputSourceId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId"></a>

```java
public java.lang.String getInputSourceId();
```

- *Type:* java.lang.String

---

##### `resourceConfiguration`<sup>Required</sup> <a name="resourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationList getResourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationInput`<sup>Optional</sup> <a name="resourceConfigurationInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration> getResourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>>

---

##### `serviceArnInput`<sup>Optional</sup> <a name="serviceArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput"></a>

```java
public java.lang.String getServiceArnInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2InputSourceConfig <a name="Resiliencehubv2InputSourceConfig" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceConfig;

Resiliencehubv2InputSourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceArn(java.lang.String)
//  .region(java.lang.String)
//  .resourceConfiguration(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration">resourceConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>></code> | resource_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#region Resiliencehubv2InputSource#region}

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration> getResourceConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>>

resource_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#resource_configuration Resiliencehubv2InputSource#resource_configuration}

---

### Resiliencehubv2InputSourceResourceConfiguration <a name="Resiliencehubv2InputSourceResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfiguration;

Resiliencehubv2InputSourceResourceConfiguration.builder()
//  .cfnStackArn(java.lang.String)
//  .designFileS3Url(java.lang.String)
//  .eks(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationEks>)
//  .resourceTag(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationResourceTag>)
//  .tfStateFileUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn">cfnStackArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url">designFileS3Url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks">eks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>></code> | eks block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag">resourceTag</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>></code> | resource_tag block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}. |

---

##### `cfnStackArn`<sup>Optional</sup> <a name="cfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn"></a>

```java
public java.lang.String getCfnStackArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}.

---

##### `designFileS3Url`<sup>Optional</sup> <a name="designFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url"></a>

```java
public java.lang.String getDesignFileS3Url();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}.

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationEks> getEks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>>

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#eks Resiliencehubv2InputSource#eks}

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationResourceTag> getResourceTag();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>>

resource_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#resource_tag Resiliencehubv2InputSource#resource_tag}

---

##### `tfStateFileUrl`<sup>Optional</sup> <a name="tfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl"></a>

```java
public java.lang.String getTfStateFileUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}.

---

### Resiliencehubv2InputSourceResourceConfigurationEks <a name="Resiliencehubv2InputSourceResourceConfigurationEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationEks;

Resiliencehubv2InputSourceResourceConfigurationEks.builder()
    .clusterArn(java.lang.String)
    .namespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}.

---

### Resiliencehubv2InputSourceResourceConfigurationResourceTag <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationResourceTag;

Resiliencehubv2InputSourceResourceConfigurationResourceTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2InputSourceResourceConfigurationEksList <a name="Resiliencehubv2InputSourceResourceConfigurationEksList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationEksList;

new Resiliencehubv2InputSourceResourceConfigurationEksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationEksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationEks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>>

---


### Resiliencehubv2InputSourceResourceConfigurationEksOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationEksOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference;

new Resiliencehubv2InputSourceResourceConfigurationEksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2InputSourceResourceConfigurationEks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>

---


### Resiliencehubv2InputSourceResourceConfigurationList <a name="Resiliencehubv2InputSourceResourceConfigurationList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationList;

new Resiliencehubv2InputSourceResourceConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>>

---


### Resiliencehubv2InputSourceResourceConfigurationOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationOutputReference;

new Resiliencehubv2InputSourceResourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn">resetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url">resetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks">resetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl">resetTfStateFileUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks"></a>

```java
public void putEks(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationEks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>>

---

##### `putResourceTag` <a name="putResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag"></a>

```java
public void putResourceTag(IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationResourceTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>>

---

##### `resetCfnStackArn` <a name="resetCfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn"></a>

```java
public void resetCfnStackArn()
```

##### `resetDesignFileS3Url` <a name="resetDesignFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```java
public void resetDesignFileS3Url()
```

##### `resetEks` <a name="resetEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks"></a>

```java
public void resetEks()
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag"></a>

```java
public void resetResourceTag()
```

##### `resetTfStateFileUrl` <a name="resetTfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```java
public void resetTfStateFileUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput">cfnStackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput">designFileS3UrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput">eksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput">tfStateFileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn">cfnStackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url">designFileS3Url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationEksList getEks();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationResourceTagList getResourceTag();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a>

---

##### `cfnStackArnInput`<sup>Optional</sup> <a name="cfnStackArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```java
public java.lang.String getCfnStackArnInput();
```

- *Type:* java.lang.String

---

##### `designFileS3UrlInput`<sup>Optional</sup> <a name="designFileS3UrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```java
public java.lang.String getDesignFileS3UrlInput();
```

- *Type:* java.lang.String

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationEks> getEksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks">Resiliencehubv2InputSourceResourceConfigurationEks</a>>

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationResourceTag> getResourceTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>>

---

##### `tfStateFileUrlInput`<sup>Optional</sup> <a name="tfStateFileUrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```java
public java.lang.String getTfStateFileUrlInput();
```

- *Type:* java.lang.String

---

##### `cfnStackArn`<sup>Required</sup> <a name="cfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn"></a>

```java
public java.lang.String getCfnStackArn();
```

- *Type:* java.lang.String

---

##### `designFileS3Url`<sup>Required</sup> <a name="designFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url"></a>

```java
public java.lang.String getDesignFileS3Url();
```

- *Type:* java.lang.String

---

##### `tfStateFileUrl`<sup>Required</sup> <a name="tfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```java
public java.lang.String getTfStateFileUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2InputSourceResourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration">Resiliencehubv2InputSourceResourceConfiguration</a>

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagList <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationResourceTagList;

new Resiliencehubv2InputSourceResourceConfigurationResourceTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get"></a>

```java
public Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2InputSourceResourceConfigurationResourceTag> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>>

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_input_source.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference;

new Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2InputSourceResourceConfigurationResourceTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag">Resiliencehubv2InputSourceResourceConfigurationResourceTag</a>

---



