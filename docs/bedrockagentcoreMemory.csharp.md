# `bedrockagentcoreMemory` Submodule <a name="`bedrockagentcoreMemory` Submodule" id="@cdktf/provider-aws.bedrockagentcoreMemory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreMemory <a name="BedrockagentcoreMemory" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory aws_bedrockagentcore_memory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreMemory(Construct Scope, string Id, BedrockagentcoreMemoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig">BedrockagentcoreMemoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig">BedrockagentcoreMemoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn">ResetMemoryExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentcoreMemoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetMemoryExecutionRoleArn` <a name="ResetMemoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn"></a>

```csharp
private void ResetMemoryExecutionRoleArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreMemory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreMemory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreMemory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreMemory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreMemory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreMemory resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreMemory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreMemory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreMemory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput">EventExpiryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput">MemoryExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration">EventExpiryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn">MemoryExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts"></a>

```csharp
public BedrockagentcoreMemoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `EventExpiryDurationInput`<sup>Optional</sup> <a name="EventExpiryDurationInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput"></a>

```csharp
public double EventExpiryDurationInput { get; }
```

- *Type:* double

---

##### `MemoryExecutionRoleArnInput`<sup>Optional</sup> <a name="MemoryExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput"></a>

```csharp
public string MemoryExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `EventExpiryDuration`<sup>Required</sup> <a name="EventExpiryDuration" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration"></a>

```csharp
public double EventExpiryDuration { get; }
```

- *Type:* double

---

##### `MemoryExecutionRoleArn`<sup>Required</sup> <a name="MemoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn"></a>

```csharp
public string MemoryExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreMemoryConfig <a name="BedrockagentcoreMemoryConfig" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreMemoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double EventExpiryDuration,
    string Name,
    string Description = null,
    string EncryptionKeyArn = null,
    string MemoryExecutionRoleArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockagentcoreMemoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration">EventExpiryDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn">MemoryExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EventExpiryDuration`<sup>Required</sup> <a name="EventExpiryDuration" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration"></a>

```csharp
public double EventExpiryDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}.

---

##### `MemoryExecutionRoleArn`<sup>Optional</sup> <a name="MemoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn"></a>

```csharp
public string MemoryExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#region BedrockagentcoreMemory#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts"></a>

```csharp
public BedrockagentcoreMemoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#timeouts BedrockagentcoreMemory#timeouts}

---

### BedrockagentcoreMemoryTimeouts <a name="BedrockagentcoreMemoryTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreMemoryTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#create BedrockagentcoreMemory#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory#delete BedrockagentcoreMemory#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreMemoryTimeoutsOutputReference <a name="BedrockagentcoreMemoryTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreMemoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreMemoryTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---



