# `rdsClusterActivityStream` Submodule <a name="`rdsClusterActivityStream` Submodule" id="@cdktn/provider-aws.rdsClusterActivityStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterActivityStream <a name="RdsClusterActivityStream" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream aws_rds_cluster_activity_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RdsClusterActivityStream(Construct Scope, string Id, RdsClusterActivityStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig">RdsClusterActivityStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig">RdsClusterActivityStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetEngineNativeAuditFieldsIncluded">ResetEngineNativeAuditFieldsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEngineNativeAuditFieldsIncluded` <a name="ResetEngineNativeAuditFieldsIncluded" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetEngineNativeAuditFieldsIncluded"></a>

```csharp
private void ResetEngineNativeAuditFieldsIncluded()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsClusterActivityStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RdsClusterActivityStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RdsClusterActivityStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RdsClusterActivityStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RdsClusterActivityStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsClusterActivityStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsClusterActivityStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsClusterActivityStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsClusterActivityStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kinesisStreamName">KinesisStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncludedInput">EngineNativeAuditFieldsIncludedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncluded">EngineNativeAuditFieldsIncluded</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KinesisStreamName`<sup>Required</sup> <a name="KinesisStreamName" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kinesisStreamName"></a>

```csharp
public string KinesisStreamName { get; }
```

- *Type:* string

---

##### `EngineNativeAuditFieldsIncludedInput`<sup>Optional</sup> <a name="EngineNativeAuditFieldsIncludedInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncludedInput"></a>

```csharp
public bool|IResolvable EngineNativeAuditFieldsIncludedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `EngineNativeAuditFieldsIncluded`<sup>Required</sup> <a name="EngineNativeAuditFieldsIncluded" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncluded"></a>

```csharp
public bool|IResolvable EngineNativeAuditFieldsIncluded { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterActivityStreamConfig <a name="RdsClusterActivityStreamConfig" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RdsClusterActivityStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KmsKeyId,
    string Mode,
    string ResourceArn,
    bool|IResolvable EngineNativeAuditFieldsIncluded = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.engineNativeAuditFieldsIncluded">EngineNativeAuditFieldsIncluded</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#id RdsClusterActivityStream#id}. |
| <code><a href="#@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}.

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}.

---

##### `EngineNativeAuditFieldsIncluded`<sup>Optional</sup> <a name="EngineNativeAuditFieldsIncluded" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.engineNativeAuditFieldsIncluded"></a>

```csharp
public bool|IResolvable EngineNativeAuditFieldsIncluded { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#id RdsClusterActivityStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/rds_cluster_activity_stream#region RdsClusterActivityStream#region}

---



