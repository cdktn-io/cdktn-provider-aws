# `bedrockagentcoreRegistry` Submodule <a name="`bedrockagentcoreRegistry` Submodule" id="@cdktn/provider-aws.bedrockagentcoreRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRegistry <a name="BedrockagentcoreRegistry" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry aws_bedrockagentcore_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistry(Construct Scope, string Id, BedrockagentcoreRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig">BedrockagentcoreRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig">BedrockagentcoreRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putApprovalConfiguration">PutApprovalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetApprovalConfiguration">ResetApprovalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetAuthorizerType">ResetAuthorizerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalConfiguration` <a name="PutApprovalConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putApprovalConfiguration"></a>

```csharp
private void PutApprovalConfiguration(IResolvable|BedrockagentcoreRegistryApprovalConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putApprovalConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]

---

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putAuthorizerConfiguration"></a>

```csharp
private void PutAuthorizerConfiguration(IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentcoreRegistryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a>

---

##### `ResetApprovalConfiguration` <a name="ResetApprovalConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetApprovalConfiguration"></a>

```csharp
private void ResetApprovalConfiguration()
```

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetAuthorizerConfiguration"></a>

```csharp
private void ResetAuthorizerConfiguration()
```

##### `ResetAuthorizerType` <a name="ResetAuthorizerType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetAuthorizerType"></a>

```csharp
private void ResetAuthorizerType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentcoreRegistry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreRegistry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreRegistry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.approvalConfiguration">ApprovalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList">BedrockagentcoreRegistryApprovalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList">BedrockagentcoreRegistryAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.registryArn">RegistryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference">BedrockagentcoreRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.approvalConfigurationInput">ApprovalConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerTypeInput">AuthorizerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerType">AuthorizerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApprovalConfiguration`<sup>Required</sup> <a name="ApprovalConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.approvalConfiguration"></a>

```csharp
public BedrockagentcoreRegistryApprovalConfigurationList ApprovalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList">BedrockagentcoreRegistryApprovalConfigurationList</a>

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerConfiguration"></a>

```csharp
public BedrockagentcoreRegistryAuthorizerConfigurationList AuthorizerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList">BedrockagentcoreRegistryAuthorizerConfigurationList</a>

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.registryArn"></a>

```csharp
public string RegistryArn { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.timeouts"></a>

```csharp
public BedrockagentcoreRegistryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference">BedrockagentcoreRegistryTimeoutsOutputReference</a>

---

##### `ApprovalConfigurationInput`<sup>Optional</sup> <a name="ApprovalConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.approvalConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryApprovalConfiguration[] ApprovalConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration[] AuthorizerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]

---

##### `AuthorizerTypeInput`<sup>Optional</sup> <a name="AuthorizerTypeInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerTypeInput"></a>

```csharp
public string AuthorizerTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a>

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.authorizerType"></a>

```csharp
public string AuthorizerType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRegistryApprovalConfiguration <a name="BedrockagentcoreRegistryApprovalConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryApprovalConfiguration {
    bool|IResolvable AutoApproval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration.property.autoApproval">AutoApproval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#auto_approval BedrockagentcoreRegistry#auto_approval}. |

---

##### `AutoApproval`<sup>Optional</sup> <a name="AutoApproval" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration.property.autoApproval"></a>

```csharp
public bool|IResolvable AutoApproval { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#auto_approval BedrockagentcoreRegistry#auto_approval}.

---

### BedrockagentcoreRegistryAuthorizerConfiguration <a name="BedrockagentcoreRegistryAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfiguration {
    IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] CustomJwtAuthorizer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | custom_jwt_authorizer block. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] CustomJwtAuthorizer { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#custom_jwt_authorizer BedrockagentcoreRegistry#custom_jwt_authorizer}

---

### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer {
    string DiscoveryUrl,
    string[] AllowedAudience = null,
    string[] AllowedClients = null,
    string[] AllowedScopes = null,
    IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] CustomClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#discovery_url BedrockagentcoreRegistry#discovery_url}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_audience BedrockagentcoreRegistry#allowed_audience}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_clients BedrockagentcoreRegistry#allowed_clients}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_scopes BedrockagentcoreRegistry#allowed_scopes}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim">CustomClaim</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | custom_claim block. |

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#discovery_url BedrockagentcoreRegistry#discovery_url}.

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_audience BedrockagentcoreRegistry#allowed_audience}.

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_clients BedrockagentcoreRegistry#allowed_clients}.

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#allowed_scopes BedrockagentcoreRegistry#allowed_scopes}.

---

##### `CustomClaim`<sup>Optional</sup> <a name="CustomClaim" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] CustomClaim { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#custom_claim BedrockagentcoreRegistry#custom_claim}

---

### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {
    string InboundTokenClaimName,
    string InboundTokenClaimValueType,
    IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] AuthorizingClaimMatchValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_name BedrockagentcoreRegistry#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_value_type BedrockagentcoreRegistry#inbound_token_claim_value_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | authorizing_claim_match_value block. |

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_name BedrockagentcoreRegistry#inbound_token_claim_name}.

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_value_type BedrockagentcoreRegistry#inbound_token_claim_value_type}.

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] AuthorizingClaimMatchValue { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

authorizing_claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#authorizing_claim_match_value BedrockagentcoreRegistry#authorizing_claim_match_value}

---

### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {
    string ClaimMatchOperator,
    IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] ClaimMatchValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#claim_match_operator BedrockagentcoreRegistry#claim_match_operator}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | claim_match_value block. |

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#claim_match_operator BedrockagentcoreRegistry#claim_match_operator}.

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] ClaimMatchValue { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#claim_match_value BedrockagentcoreRegistry#claim_match_value}

---

### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {
    string MatchValueString = null,
    string[] MatchValueStringList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#match_value_string BedrockagentcoreRegistry#match_value_string}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#match_value_string_list BedrockagentcoreRegistry#match_value_string_list}. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```csharp
public string MatchValueString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#match_value_string BedrockagentcoreRegistry#match_value_string}.

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#match_value_string_list BedrockagentcoreRegistry#match_value_string_list}.

---

### BedrockagentcoreRegistryConfig <a name="BedrockagentcoreRegistryConfig" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|BedrockagentcoreRegistryApprovalConfiguration[] ApprovalConfiguration = null,
    IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration[] AuthorizerConfiguration = null,
    string AuthorizerType = null,
    string Description = null,
    string Region = null,
    BedrockagentcoreRegistryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#name BedrockagentcoreRegistry#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.approvalConfiguration">ApprovalConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#approval_configuration BedrockagentcoreRegistry#approval_configuration}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]</code> | authorizer_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.authorizerType">AuthorizerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#authorizer_type BedrockagentcoreRegistry#authorizer_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#description BedrockagentcoreRegistry#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#name BedrockagentcoreRegistry#name}.

---

##### `ApprovalConfiguration`<sup>Optional</sup> <a name="ApprovalConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.approvalConfiguration"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryApprovalConfiguration[] ApprovalConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#approval_configuration BedrockagentcoreRegistry#approval_configuration}.

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.authorizerConfiguration"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration[] AuthorizerConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#authorizer_configuration BedrockagentcoreRegistry#authorizer_configuration}

---

##### `AuthorizerType`<sup>Optional</sup> <a name="AuthorizerType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.authorizerType"></a>

```csharp
public string AuthorizerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#authorizer_type BedrockagentcoreRegistry#authorizer_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#description BedrockagentcoreRegistry#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#region BedrockagentcoreRegistry#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryConfig.property.timeouts"></a>

```csharp
public BedrockagentcoreRegistryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#timeouts BedrockagentcoreRegistry#timeouts}

---

### BedrockagentcoreRegistryTimeouts <a name="BedrockagentcoreRegistryTimeouts" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#create BedrockagentcoreRegistry#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#delete BedrockagentcoreRegistry#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_registry#update BedrockagentcoreRegistry#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreRegistryApprovalConfigurationList <a name="BedrockagentcoreRegistryApprovalConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryApprovalConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.get"></a>

```csharp
private BedrockagentcoreRegistryApprovalConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryApprovalConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>[]

---


### BedrockagentcoreRegistryApprovalConfigurationOutputReference <a name="BedrockagentcoreRegistryApprovalConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryApprovalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.resetAutoApproval">ResetAutoApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoApproval` <a name="ResetAutoApproval" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.resetAutoApproval"></a>

```csharp
private void ResetAutoApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.autoApprovalInput">AutoApprovalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.autoApproval">AutoApproval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoApprovalInput`<sup>Optional</sup> <a name="AutoApprovalInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.autoApprovalInput"></a>

```csharp
public bool|IResolvable AutoApprovalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoApproval`<sup>Required</sup> <a name="AutoApproval" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.autoApproval"></a>

```csharp
public bool|IResolvable AutoApproval { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryApprovalConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryApprovalConfiguration">BedrockagentcoreRegistryApprovalConfiguration</a>

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get"></a>

```csharp
private BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```csharp
private void ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```csharp
private void ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```csharp
public string MatchValueStringInput { get; }
```

- *Type:* string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```csharp
public string[] MatchValueStringListInput { get; }
```

- *Type:* string[]

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```csharp
public string MatchValueString { get; }
```

- *Type:* string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get"></a>

```csharp
private BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```csharp
private void PutClaimMatchValue(IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```csharp
private void ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```csharp
public BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList ClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```csharp
public string ClaimMatchOperatorInput { get; }
```

- *Type:* string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] ClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get"></a>

```csharp
private BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue"></a>

```csharp
private void PutAuthorizingClaimMatchValue(IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue"></a>

```csharp
private void ResetAuthorizingClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue"></a>

```csharp
public BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList AuthorizingClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] AuthorizingClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput"></a>

```csharp
public string InboundTokenClaimNameInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```csharp
public string InboundTokenClaimValueTypeInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```csharp
private BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---


### BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim">PutCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim">ResetCustomClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomClaim` <a name="PutCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim"></a>

```csharp
private void PutCustomClaim(IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```csharp
private void ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```csharp
private void ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```csharp
private void ResetAllowedScopes()
```

##### `ResetCustomClaim` <a name="ResetCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim"></a>

```csharp
private void ResetCustomClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput">CustomClaimInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim"></a>

```csharp
public BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList CustomClaim { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```csharp
public string[] AllowedAudienceInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```csharp
public string[] AllowedClientsInput { get; }
```

- *Type:* string[]

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```csharp
public string[] AllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `CustomClaimInput`<sup>Optional</sup> <a name="CustomClaimInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] CustomClaimInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; }
```

- *Type:* string[]

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; }
```

- *Type:* string[]

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreRegistryAuthorizerConfigurationList <a name="BedrockagentcoreRegistryAuthorizerConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.get"></a>

```csharp
private BedrockagentcoreRegistryAuthorizerConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>[]

---


### BedrockagentcoreRegistryAuthorizerConfigurationOutputReference <a name="BedrockagentcoreRegistryAuthorizerConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryAuthorizerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```csharp
private void PutCustomJwtAuthorizer(IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```csharp
private void ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```csharp
public BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList CustomJwtAuthorizer { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] CustomJwtAuthorizerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryAuthorizerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryAuthorizerConfiguration">BedrockagentcoreRegistryAuthorizerConfiguration</a>

---


### BedrockagentcoreRegistryTimeoutsOutputReference <a name="BedrockagentcoreRegistryTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentcoreRegistryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRegistryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreRegistry.BedrockagentcoreRegistryTimeouts">BedrockagentcoreRegistryTimeouts</a>

---



