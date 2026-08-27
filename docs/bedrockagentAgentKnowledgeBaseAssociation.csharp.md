# `bedrockagentAgentKnowledgeBaseAssociation` Submodule <a name="`bedrockagentAgentKnowledgeBaseAssociation` Submodule" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentKnowledgeBaseAssociation <a name="BedrockagentAgentKnowledgeBaseAssociation" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association aws_bedrockagent_agent_knowledge_base_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentKnowledgeBaseAssociation(Construct Scope, string Id, BedrockagentAgentKnowledgeBaseAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig">BedrockagentAgentKnowledgeBaseAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig">BedrockagentAgentKnowledgeBaseAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentAgentKnowledgeBaseAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion"></a>

```csharp
private void ResetAgentVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentKnowledgeBaseAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentKnowledgeBaseAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentKnowledgeBaseAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentKnowledgeBaseAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgentKnowledgeBaseAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgentKnowledgeBaseAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentKnowledgeBaseAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference">BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput">AgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput">KnowledgeBaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeouts"></a>

```csharp
public BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference">BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput"></a>

```csharp
public string AgentVersionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput"></a>

```csharp
public string KnowledgeBaseIdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseStateInput`<sup>Optional</sup> <a name="KnowledgeBaseStateInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput"></a>

```csharp
public string KnowledgeBaseStateInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentAgentKnowledgeBaseAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `KnowledgeBaseState`<sup>Required</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState"></a>

```csharp
public string KnowledgeBaseState { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentKnowledgeBaseAssociationConfig <a name="BedrockagentAgentKnowledgeBaseAssociationConfig" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentKnowledgeBaseAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentId,
    string Description,
    string KnowledgeBaseId,
    string KnowledgeBaseState,
    string AgentVersion = null,
    string Region = null,
    BedrockagentAgentKnowledgeBaseAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion">AgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}.

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}.

---

##### `KnowledgeBaseState`<sup>Required</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState"></a>

```csharp
public string KnowledgeBaseState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}.

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion"></a>

```csharp
public string AgentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#region BedrockagentAgentKnowledgeBaseAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.timeouts"></a>

```csharp
public BedrockagentAgentKnowledgeBaseAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#timeouts BedrockagentAgentKnowledgeBaseAssociation#timeouts}

---

### BedrockagentAgentKnowledgeBaseAssociationTimeouts <a name="BedrockagentAgentKnowledgeBaseAssociationTimeouts" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentKnowledgeBaseAssociationTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#create BedrockagentAgentKnowledgeBaseAssociation#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_knowledge_base_association#update BedrockagentAgentKnowledgeBaseAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference <a name="BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentAgentKnowledgeBaseAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---



