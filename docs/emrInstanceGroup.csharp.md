# `emrInstanceGroup` Submodule <a name="`emrInstanceGroup` Submodule" id="@cdktn/provider-aws.emrInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrInstanceGroup <a name="EmrInstanceGroup" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group aws_emr_instance_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EmrInstanceGroup(Construct Scope, string Id, EmrInstanceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson">ResetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig"></a>

```csharp
private void PutEbsConfig(IResolvable|EmrInstanceGroupEbsConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy"></a>

```csharp
private void ResetAutoscalingPolicy()
```

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice"></a>

```csharp
private void ResetBidPrice()
```

##### `ResetConfigurationsJson` <a name="ResetConfigurationsJson" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson"></a>

```csharp
private void ResetConfigurationsJson()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig"></a>

```csharp
private void ResetEbsConfig()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmrInstanceGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EmrInstanceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EmrInstanceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EmrInstanceGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EmrInstanceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmrInstanceGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrInstanceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmrInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount">RunningInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput">BidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput">ConfigurationsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput">EbsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice">BidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson">ConfigurationsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig"></a>

```csharp
public EmrInstanceGroupEbsConfigList EbsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a>

---

##### `RunningInstanceCount`<sup>Required</sup> <a name="RunningInstanceCount" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount"></a>

```csharp
public double RunningInstanceCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput"></a>

```csharp
public string AutoscalingPolicyInput { get; }
```

- *Type:* string

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput"></a>

```csharp
public string BidPriceInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationsJsonInput`<sup>Optional</sup> <a name="ConfigurationsJsonInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput"></a>

```csharp
public string ConfigurationsJsonInput { get; }
```

- *Type:* string

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput"></a>

```csharp
public IResolvable|EmrInstanceGroupEbsConfig[] EbsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput"></a>

```csharp
public bool|IResolvable EbsOptimizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy"></a>

```csharp
public string AutoscalingPolicy { get; }
```

- *Type:* string

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice"></a>

```csharp
public string BidPrice { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ConfigurationsJson`<sup>Required</sup> <a name="ConfigurationsJson" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson"></a>

```csharp
public string ConfigurationsJson { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrInstanceGroupConfig <a name="EmrInstanceGroupConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EmrInstanceGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    string InstanceType,
    string AutoscalingPolicy = null,
    string BidPrice = null,
    string ConfigurationsJson = null,
    IResolvable|EmrInstanceGroupEbsConfig[] EbsConfig = null,
    bool|IResolvable EbsOptimized = null,
    string Id = null,
    double InstanceCount = null,
    string Name = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice">BidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson">ConfigurationsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig">EbsConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}.

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy"></a>

```csharp
public string AutoscalingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice"></a>

```csharp
public string BidPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}.

---

##### `ConfigurationsJson`<sup>Optional</sup> <a name="ConfigurationsJson" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson"></a>

```csharp
public string ConfigurationsJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}.

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig"></a>

```csharp
public IResolvable|EmrInstanceGroupEbsConfig[] EbsConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#ebs_config EmrInstanceGroup#ebs_config}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized"></a>

```csharp
public bool|IResolvable EbsOptimized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#region EmrInstanceGroup#region}

---

### EmrInstanceGroupEbsConfig <a name="EmrInstanceGroupEbsConfig" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EmrInstanceGroupEbsConfig {
    double Size,
    string Type,
    double Iops = null,
    double VolumesPerInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```csharp
public double VolumesPerInstance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrInstanceGroupEbsConfigList <a name="EmrInstanceGroupEbsConfigList" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EmrInstanceGroupEbsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get"></a>

```csharp
private EmrInstanceGroupEbsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue"></a>

```csharp
public IResolvable|EmrInstanceGroupEbsConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---


### EmrInstanceGroupEbsConfigOutputReference <a name="EmrInstanceGroupEbsConfigOutputReference" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EmrInstanceGroupEbsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```csharp
private void ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```csharp
public double VolumesPerInstanceInput { get; }
```

- *Type:* double

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```csharp
public double VolumesPerInstance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EmrInstanceGroupEbsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>

---



