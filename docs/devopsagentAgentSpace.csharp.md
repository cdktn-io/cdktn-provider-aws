# `devopsagentAgentSpace` Submodule <a name="`devopsagentAgentSpace` Submodule" id="@cdktn/provider-aws.devopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAgentSpace <a name="DevopsagentAgentSpace" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space aws_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAgentSpace(Construct Scope, string Id, DevopsagentAgentSpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAgentSpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAgentSpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAgentSpace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsagentAgentSpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAgentSpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAgentSpaceConfig <a name="DevopsagentAgentSpaceConfig" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsagentAgentSpaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string KmsKeyArn = null,
    string Locale = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name">Name</a></code> | <code>string</code> | Name of the Agent Space. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description">Description</a></code> | <code>string</code> | Description of the Agent Space. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | ARN of the KMS key used to encrypt resources. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale">Locale</a></code> | <code>string</code> | Locale for the Agent Space, which determines the language used in agent responses. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#name DevopsagentAgentSpace#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#description DevopsagentAgentSpace#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

ARN of the KMS key used to encrypt resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#kms_key_arn DevopsagentAgentSpace#kms_key_arn}

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Locale for the Agent Space, which determines the language used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#locale DevopsagentAgentSpace#locale}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#region DevopsagentAgentSpace#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}.

---



