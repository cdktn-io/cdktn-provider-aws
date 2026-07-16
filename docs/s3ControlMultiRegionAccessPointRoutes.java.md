# `s3ControlMultiRegionAccessPointRoutes` Submodule <a name="`s3ControlMultiRegionAccessPointRoutes` Submodule" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointRoutes <a name="S3ControlMultiRegionAccessPointRoutes" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes aws_s3control_multi_region_access_point_routes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutes;

S3ControlMultiRegionAccessPointRoutes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mrap(java.lang.String)
//  .accountId(java.lang.String)
//  .region(java.lang.String)
//  .route(IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.mrap">mrap</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.route">route</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>></code> | route block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mrap`<sup>Required</sup> <a name="mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.mrap"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.route"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#route S3ControlMultiRegionAccessPointRoutes#route}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute">resetRoute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoute` <a name="putRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute"></a>

```java
public void putRoute(IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoute` <a name="resetRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute"></a>

```java
public void resetRoute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutes;

S3ControlMultiRegionAccessPointRoutes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutes;

S3ControlMultiRegionAccessPointRoutes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutes;

S3ControlMultiRegionAccessPointRoutes.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutes;

S3ControlMultiRegionAccessPointRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3ControlMultiRegionAccessPointRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3ControlMultiRegionAccessPointRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3ControlMultiRegionAccessPointRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3ControlMultiRegionAccessPointRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route">route</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput">mrapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput">routeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap">mrap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route"></a>

```java
public S3ControlMultiRegionAccessPointRoutesRouteList getRoute();
```

- *Type:* <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `mrapInput`<sup>Optional</sup> <a name="mrapInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput"></a>

```java
public java.lang.String getMrapInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput"></a>

```java
public IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute> getRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `mrap`<sup>Required</sup> <a name="mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap"></a>

```java
public java.lang.String getMrap();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointRoutesConfig <a name="S3ControlMultiRegionAccessPointRoutesConfig" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutesConfig;

S3ControlMultiRegionAccessPointRoutesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mrap(java.lang.String)
//  .accountId(java.lang.String)
//  .region(java.lang.String)
//  .route(IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap">mrap</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route">route</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>></code> | route block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mrap`<sup>Required</sup> <a name="mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap"></a>

```java
public java.lang.String getMrap();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route"></a>

```java
public IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute> getRoute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#route S3ControlMultiRegionAccessPointRoutes#route}

---

### S3ControlMultiRegionAccessPointRoutesRoute <a name="S3ControlMultiRegionAccessPointRoutesRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutesRoute;

S3ControlMultiRegionAccessPointRoutesRoute.builder()
    .bucket(java.lang.String)
    .region(java.lang.String)
    .trafficDialPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}.

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointRoutesRouteList <a name="S3ControlMultiRegionAccessPointRoutesRouteList" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutesRouteList;

new S3ControlMultiRegionAccessPointRoutesRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get"></a>

```java
public S3ControlMultiRegionAccessPointRoutesRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ControlMultiRegionAccessPointRoutesRoute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>>

---


### S3ControlMultiRegionAccessPointRoutesRouteOutputReference <a name="S3ControlMultiRegionAccessPointRoutesRouteOutputReference" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_control_multi_region_access_point_routes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference;

new S3ControlMultiRegionAccessPointRoutesRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput">trafficDialPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `trafficDialPercentageInput`<sup>Optional</sup> <a name="trafficDialPercentageInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput"></a>

```java
public java.lang.Number getTrafficDialPercentageInput();
```

- *Type:* java.lang.Number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ControlMultiRegionAccessPointRoutesRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>

---



