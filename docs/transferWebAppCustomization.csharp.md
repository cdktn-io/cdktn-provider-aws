# `transferWebAppCustomization` Submodule <a name="`transferWebAppCustomization` Submodule" id="@cdktn/provider-aws.transferWebAppCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebAppCustomization <a name="TransferWebAppCustomization" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferWebAppCustomization(Construct Scope, string Id, TransferWebAppCustomizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig">TransferWebAppCustomizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig">TransferWebAppCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile">ResetFaviconFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile">ResetLogoFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetFaviconFile` <a name="ResetFaviconFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile"></a>

```csharp
private void ResetFaviconFile()
```

##### `ResetLogoFile` <a name="ResetLogoFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile"></a>

```csharp
private void ResetLogoFile()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle"></a>

```csharp
private void ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransferWebAppCustomization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferWebAppCustomization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferWebAppCustomization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferWebAppCustomization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferWebAppCustomization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransferWebAppCustomization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebAppCustomization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebAppCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransferWebAppCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput">FaviconFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput">LogoFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput">WebAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile">FaviconFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile">LogoFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId">WebAppId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FaviconFileInput`<sup>Optional</sup> <a name="FaviconFileInput" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput"></a>

```csharp
public string FaviconFileInput { get; }
```

- *Type:* string

---

##### `LogoFileInput`<sup>Optional</sup> <a name="LogoFileInput" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput"></a>

```csharp
public string LogoFileInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WebAppIdInput`<sup>Optional</sup> <a name="WebAppIdInput" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput"></a>

```csharp
public string WebAppIdInput { get; }
```

- *Type:* string

---

##### `FaviconFile`<sup>Required</sup> <a name="FaviconFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile"></a>

```csharp
public string FaviconFile { get; }
```

- *Type:* string

---

##### `LogoFile`<sup>Required</sup> <a name="LogoFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile"></a>

```csharp
public string LogoFile { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId"></a>

```csharp
public string WebAppId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppCustomizationConfig <a name="TransferWebAppCustomizationConfig" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferWebAppCustomizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WebAppId,
    string FaviconFile = null,
    string LogoFile = null,
    string Region = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId">WebAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile">FaviconFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile">LogoFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId"></a>

```csharp
public string WebAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `FaviconFile`<sup>Optional</sup> <a name="FaviconFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile"></a>

```csharp
public string FaviconFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `LogoFile`<sup>Optional</sup> <a name="LogoFile" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile"></a>

```csharp
public string LogoFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---



