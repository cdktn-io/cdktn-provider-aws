# `workspaceswebPortal` Submodule <a name="`workspaceswebPortal` Submodule" id="@cdktn/provider-aws.workspaceswebPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebPortal <a name="WorkspaceswebPortal" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal aws_workspacesweb_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebPortal(Construct Scope, string Id, WorkspaceswebPortalConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig">WorkspaceswebPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig">WorkspaceswebPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn">ResetBrowserSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions">ResetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkspaceswebPortalTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext"></a>

```csharp
private void ResetAdditionalEncryptionContext()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetBrowserSettingsArn` <a name="ResetBrowserSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn"></a>

```csharp
private void ResetBrowserSettingsArn()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetMaxConcurrentSessions` <a name="ResetMaxConcurrentSessions" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions"></a>

```csharp
private void ResetMaxConcurrentSessions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebPortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn">DataProtectionSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn">IpAccessSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn">NetworkSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn">PortalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint">PortalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus">PortalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType">RendererType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn">SessionLoggerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn">UserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput">BrowserSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput">MaxConcurrentSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn">BrowserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions">MaxConcurrentSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `DataProtectionSettingsArn`<sup>Required</sup> <a name="DataProtectionSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn"></a>

```csharp
public string DataProtectionSettingsArn { get; }
```

- *Type:* string

---

##### `IpAccessSettingsArn`<sup>Required</sup> <a name="IpAccessSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn"></a>

```csharp
public string IpAccessSettingsArn { get; }
```

- *Type:* string

---

##### `NetworkSettingsArn`<sup>Required</sup> <a name="NetworkSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn"></a>

```csharp
public string NetworkSettingsArn { get; }
```

- *Type:* string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn"></a>

```csharp
public string PortalArn { get; }
```

- *Type:* string

---

##### `PortalEndpoint`<sup>Required</sup> <a name="PortalEndpoint" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint"></a>

```csharp
public string PortalEndpoint { get; }
```

- *Type:* string

---

##### `PortalStatus`<sup>Required</sup> <a name="PortalStatus" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus"></a>

```csharp
public string PortalStatus { get; }
```

- *Type:* string

---

##### `RendererType`<sup>Required</sup> <a name="RendererType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType"></a>

```csharp
public string RendererType { get; }
```

- *Type:* string

---

##### `SessionLoggerArn`<sup>Required</sup> <a name="SessionLoggerArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn"></a>

```csharp
public string SessionLoggerArn { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts"></a>

```csharp
public WorkspaceswebPortalTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a>

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn"></a>

```csharp
public string UserAccessLoggingSettingsArn { get; }
```

- *Type:* string

---

##### `UserSettingsArn`<sup>Required</sup> <a name="UserSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn"></a>

```csharp
public string UserSettingsArn { get; }
```

- *Type:* string

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `BrowserSettingsArnInput`<sup>Optional</sup> <a name="BrowserSettingsArnInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput"></a>

```csharp
public string BrowserSettingsArnInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput"></a>

```csharp
public string CustomerManagedKeyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MaxConcurrentSessionsInput`<sup>Optional</sup> <a name="MaxConcurrentSessionsInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput"></a>

```csharp
public double MaxConcurrentSessionsInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput"></a>

```csharp
public IResolvable|WorkspaceswebPortalTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `BrowserSettingsArn`<sup>Required</sup> <a name="BrowserSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn"></a>

```csharp
public string BrowserSettingsArn { get; }
```

- *Type:* string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MaxConcurrentSessions`<sup>Required</sup> <a name="MaxConcurrentSessions" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions"></a>

```csharp
public double MaxConcurrentSessions { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebPortalConfig <a name="WorkspaceswebPortalConfig" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebPortalConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext = null,
    string AuthenticationType = null,
    string BrowserSettingsArn = null,
    string CustomerManagedKey = null,
    string DisplayName = null,
    string InstanceType = null,
    double MaxConcurrentSessions = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WorkspaceswebPortalTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn">BrowserSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions">MaxConcurrentSessions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `BrowserSettingsArn`<sup>Optional</sup> <a name="BrowserSettingsArn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn"></a>

```csharp
public string BrowserSettingsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `MaxConcurrentSessions`<sup>Optional</sup> <a name="MaxConcurrentSessions" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions"></a>

```csharp
public double MaxConcurrentSessions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#region WorkspaceswebPortal#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts"></a>

```csharp
public WorkspaceswebPortalTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#timeouts WorkspaceswebPortal#timeouts}

---

### WorkspaceswebPortalTimeouts <a name="WorkspaceswebPortalTimeouts" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebPortalTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#create WorkspaceswebPortal#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#delete WorkspaceswebPortal#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workspacesweb_portal#update WorkspaceswebPortal#update}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebPortalTimeoutsOutputReference <a name="WorkspaceswebPortalTimeoutsOutputReference" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebPortalTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebPortalTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---



