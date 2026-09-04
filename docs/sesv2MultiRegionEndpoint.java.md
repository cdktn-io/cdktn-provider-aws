# `sesv2MultiRegionEndpoint` Submodule <a name="`sesv2MultiRegionEndpoint` Submodule" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2MultiRegionEndpoint <a name="Sesv2MultiRegionEndpoint" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint aws_sesv2_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpoint;

Sesv2MultiRegionEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointName(java.lang.String)
//  .details(IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Sesv2MultiRegionEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.details">details</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>></code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.details"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails"></a>

```java
public void putDetails(IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts"></a>

```java
public void putTimeouts(Sesv2MultiRegionEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails"></a>

```java
public void resetDetails()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpoint;

Sesv2MultiRegionEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpoint;

Sesv2MultiRegionEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpoint;

Sesv2MultiRegionEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpoint;

Sesv2MultiRegionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Sesv2MultiRegionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Sesv2MultiRegionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Sesv2MultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2MultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details">details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes">routes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput">detailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details"></a>

```java
public Sesv2MultiRegionEndpointDetailsList getDetails();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes"></a>

```java
public Sesv2MultiRegionEndpointRoutesList getRoutes();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts"></a>

```java
public Sesv2MultiRegionEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails> getDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|Sesv2MultiRegionEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2MultiRegionEndpointConfig <a name="Sesv2MultiRegionEndpointConfig" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointConfig;

Sesv2MultiRegionEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointName(java.lang.String)
//  .details(IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Sesv2MultiRegionEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details">details</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>></code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails> getDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts"></a>

```java
public Sesv2MultiRegionEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

### Sesv2MultiRegionEndpointDetails <a name="Sesv2MultiRegionEndpointDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetails;

Sesv2MultiRegionEndpointDetails.builder()
//  .routesDetails(IResolvable|java.util.List<Sesv2MultiRegionEndpointDetailsRoutesDetails>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails">routesDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>></code> | routes_details block. |

---

##### `routesDetails`<sup>Optional</sup> <a name="routesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetailsRoutesDetails> getRoutesDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>>

routes_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#routes_details Sesv2MultiRegionEndpoint#routes_details}

---

### Sesv2MultiRegionEndpointDetailsRoutesDetails <a name="Sesv2MultiRegionEndpointDetailsRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails;

Sesv2MultiRegionEndpointDetailsRoutesDetails.builder()
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}.

---

### Sesv2MultiRegionEndpointRoutes <a name="Sesv2MultiRegionEndpointRoutes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointRoutes;

Sesv2MultiRegionEndpointRoutes.builder()
    .build();
```


### Sesv2MultiRegionEndpointTimeouts <a name="Sesv2MultiRegionEndpointTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointTimeouts;

Sesv2MultiRegionEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2MultiRegionEndpointDetailsList <a name="Sesv2MultiRegionEndpointDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetailsList;

new Sesv2MultiRegionEndpointDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get"></a>

```java
public Sesv2MultiRegionEndpointDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>>

---


### Sesv2MultiRegionEndpointDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetailsOutputReference;

new Sesv2MultiRegionEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails">putRoutesDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails">resetRoutesDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutesDetails` <a name="putRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails"></a>

```java
public void putRoutesDetails(IResolvable|java.util.List<Sesv2MultiRegionEndpointDetailsRoutesDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>>

---

##### `resetRoutesDetails` <a name="resetRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails"></a>

```java
public void resetRoutesDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails">routesDetails</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput">routesDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routesDetails`<sup>Required</sup> <a name="routesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails"></a>

```java
public Sesv2MultiRegionEndpointDetailsRoutesDetailsList getRoutesDetails();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a>

---

##### `routesDetailsInput`<sup>Optional</sup> <a name="routesDetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetailsRoutesDetails> getRoutesDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Sesv2MultiRegionEndpointDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsList <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList;

new Sesv2MultiRegionEndpointDetailsRoutesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get"></a>

```java
public Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Sesv2MultiRegionEndpointDetailsRoutesDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>>

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference;

new Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>

---


### Sesv2MultiRegionEndpointRoutesList <a name="Sesv2MultiRegionEndpointRoutesList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointRoutesList;

new Sesv2MultiRegionEndpointRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get"></a>

```java
public Sesv2MultiRegionEndpointRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### Sesv2MultiRegionEndpointRoutesOutputReference <a name="Sesv2MultiRegionEndpointRoutesOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointRoutesOutputReference;

new Sesv2MultiRegionEndpointRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue"></a>

```java
public Sesv2MultiRegionEndpointRoutes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a>

---


### Sesv2MultiRegionEndpointTimeoutsOutputReference <a name="Sesv2MultiRegionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sesv2_multi_region_endpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference;

new Sesv2MultiRegionEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Sesv2MultiRegionEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---



