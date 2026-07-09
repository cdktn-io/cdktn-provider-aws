# `serverlessapplicationrepositoryCloudformationStack` Submodule <a name="`serverlessapplicationrepositoryCloudformationStack` Submodule" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessapplicationrepositoryCloudformationStack <a name="ServerlessapplicationrepositoryCloudformationStack" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack aws_serverlessapplicationrepository_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServerlessapplicationrepositoryCloudformationStack(Construct Scope, string Id, ServerlessapplicationrepositoryCloudformationStackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts"></a>

```csharp
private void PutTimeouts(ServerlessapplicationrepositoryCloudformationStackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion"></a>

```csharp
private void ResetSemanticVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServerlessapplicationrepositoryCloudformationStack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServerlessapplicationrepositoryCloudformationStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServerlessapplicationrepositoryCloudformationStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServerlessapplicationrepositoryCloudformationStack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServerlessapplicationrepositoryCloudformationStack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServerlessapplicationrepositoryCloudformationStack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerlessapplicationrepositoryCloudformationStack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerlessapplicationrepositoryCloudformationStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessapplicationrepositoryCloudformationStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs">Outputs</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs"></a>

```csharp
public StringMap Outputs { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts"></a>

```csharp
public ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput"></a>

```csharp
public string SemanticVersionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput"></a>

```csharp
public IResolvable|ServerlessapplicationrepositoryCloudformationStackTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessapplicationrepositoryCloudformationStackConfig <a name="ServerlessapplicationrepositoryCloudformationStackConfig" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServerlessapplicationrepositoryCloudformationStackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string Name,
    string[] Capabilities = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Region = null,
    string SemanticVersion = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ServerlessapplicationrepositoryCloudformationStackTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities">Capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#region ServerlessapplicationrepositoryCloudformationStack#region}

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts"></a>

```csharp
public ServerlessapplicationrepositoryCloudformationStackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}

---

### ServerlessapplicationrepositoryCloudformationStackTimeouts <a name="ServerlessapplicationrepositoryCloudformationStackTimeouts" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServerlessapplicationrepositoryCloudformationStackTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference <a name="ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServerlessapplicationrepositoryCloudformationStackTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---



