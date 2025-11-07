# `bedrockagentcoreAgentRuntimeEndpoint` Submodule <a name="`bedrockagentcoreAgentRuntimeEndpoint` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntimeEndpoint <a name="BedrockagentcoreAgentRuntimeEndpoint" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint aws_bedrockagentcore_agent_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreAgentRuntimeEndpoint(Construct Scope, string Id, BedrockagentcoreAgentRuntimeEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion">ResetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentcoreAgentRuntimeEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `ResetAgentRuntimeVersion` <a name="ResetAgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```csharp
private void ResetAgentRuntimeVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreAgentRuntimeEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreAgentRuntimeEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreAgentRuntimeEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreAgentRuntimeEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreAgentRuntimeEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreAgentRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn">AgentRuntimeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput">AgentRuntimeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput">AgentRuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn"></a>

```csharp
public string AgentRuntimeArn { get; }
```

- *Type:* string

---

##### `AgentRuntimeEndpointArn`<sup>Required</sup> <a name="AgentRuntimeEndpointArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```csharp
public string AgentRuntimeEndpointArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts"></a>

```csharp
public BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a>

---

##### `AgentRuntimeIdInput`<sup>Optional</sup> <a name="AgentRuntimeIdInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```csharp
public string AgentRuntimeIdInput { get; }
```

- *Type:* string

---

##### `AgentRuntimeVersionInput`<sup>Optional</sup> <a name="AgentRuntimeVersionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```csharp
public string AgentRuntimeVersionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentcoreAgentRuntimeEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId"></a>

```csharp
public string AgentRuntimeId { get; }
```

- *Type:* string

---

##### `AgentRuntimeVersion`<sup>Required</sup> <a name="AgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion"></a>

```csharp
public string AgentRuntimeVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeEndpointConfig <a name="BedrockagentcoreAgentRuntimeEndpointConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreAgentRuntimeEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentRuntimeId,
    string Name,
    string AgentRuntimeVersion = null,
    string Description = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockagentcoreAgentRuntimeEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId"></a>

```csharp
public string AgentRuntimeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}.

---

##### `AgentRuntimeVersion`<sup>Optional</sup> <a name="AgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```csharp
public string AgentRuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#region BedrockagentcoreAgentRuntimeEndpoint#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts"></a>

```csharp
public BedrockagentcoreAgentRuntimeEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#timeouts BedrockagentcoreAgentRuntimeEndpoint#timeouts}

---

### BedrockagentcoreAgentRuntimeEndpointTimeouts <a name="BedrockagentcoreAgentRuntimeEndpointTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreAgentRuntimeEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#create BedrockagentcoreAgentRuntimeEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#delete BedrockagentcoreAgentRuntimeEndpoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#update BedrockagentcoreAgentRuntimeEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreAgentRuntimeEndpointTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---



