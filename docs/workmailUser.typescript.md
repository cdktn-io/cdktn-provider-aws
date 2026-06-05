# `workmailUser` Submodule <a name="`workmailUser` Submodule" id="@cdktn/provider-aws.workmailUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailUser <a name="WorkmailUser" id="@cdktn/provider-aws.workmailUser.WorkmailUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user aws_workmail_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

new workmailUser.WorkmailUser(scope: Construct, id: string, config: WorkmailUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig">WorkmailUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig">WorkmailUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany">resetCompany</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList">resetHiddenFromGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId">resetIdentityProviderUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice">resetOffice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet">resetStreet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone">resetTelephone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole">resetUserRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCity` <a name="resetCity" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCompany` <a name="resetCompany" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany"></a>

```typescript
public resetCompany(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment"></a>

```typescript
public resetDepartment(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetHiddenFromGlobalAddressList` <a name="resetHiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList"></a>

```typescript
public resetHiddenFromGlobalAddressList(): void
```

##### `resetIdentityProviderUserId` <a name="resetIdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId"></a>

```typescript
public resetIdentityProviderUserId(): void
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials"></a>

```typescript
public resetInitials(): void
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle"></a>

```typescript
public resetJobTitle(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOffice` <a name="resetOffice" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice"></a>

```typescript
public resetOffice(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStreet` <a name="resetStreet" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet"></a>

```typescript
public resetStreet(): void
```

##### `resetTelephone` <a name="resetTelephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone"></a>

```typescript
public resetTelephone(): void
```

##### `resetUserRole` <a name="resetUserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole"></a>

```typescript
public resetUserRole(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode"></a>

```typescript
public resetZipCode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

workmailUser.WorkmailUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

workmailUser.WorkmailUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

workmailUser.WorkmailUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

workmailUser.WorkmailUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkmailUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkmailUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate">disabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate">enabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId">identityProviderIdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate">mailboxDeprovisionedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate">mailboxProvisionedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput">companyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput">departmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput">hiddenFromGlobalAddressListInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput">identityProviderUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput">initialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput">jobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput">officeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput">streetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput">telephoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput">userRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.company">company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList">hiddenFromGlobalAddressList</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId">identityProviderUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.office">office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone">telephone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole">userRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `disabledDate`<sup>Required</sup> <a name="disabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate"></a>

```typescript
public readonly disabledDate: string;
```

- *Type:* string

---

##### `enabledDate`<sup>Required</sup> <a name="enabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate"></a>

```typescript
public readonly enabledDate: string;
```

- *Type:* string

---

##### `identityProviderIdentityStoreId`<sup>Required</sup> <a name="identityProviderIdentityStoreId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId"></a>

```typescript
public readonly identityProviderIdentityStoreId: string;
```

- *Type:* string

---

##### `mailboxDeprovisionedDate`<sup>Required</sup> <a name="mailboxDeprovisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate"></a>

```typescript
public readonly mailboxDeprovisionedDate: string;
```

- *Type:* string

---

##### `mailboxProvisionedDate`<sup>Required</sup> <a name="mailboxProvisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate"></a>

```typescript
public readonly mailboxProvisionedDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput"></a>

```typescript
public readonly companyInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `hiddenFromGlobalAddressListInput`<sup>Optional</sup> <a name="hiddenFromGlobalAddressListInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput"></a>

```typescript
public readonly hiddenFromGlobalAddressListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityProviderUserIdInput`<sup>Optional</sup> <a name="identityProviderUserIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput"></a>

```typescript
public readonly identityProviderUserIdInput: string;
```

- *Type:* string

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput"></a>

```typescript
public readonly initialsInput: string;
```

- *Type:* string

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `officeInput`<sup>Optional</sup> <a name="officeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput"></a>

```typescript
public readonly officeInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `streetInput`<sup>Optional</sup> <a name="streetInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput"></a>

```typescript
public readonly streetInput: string;
```

- *Type:* string

---

##### `telephoneInput`<sup>Optional</sup> <a name="telephoneInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput"></a>

```typescript
public readonly telephoneInput: string;
```

- *Type:* string

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput"></a>

```typescript
public readonly userRoleInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `hiddenFromGlobalAddressList`<sup>Required</sup> <a name="hiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList"></a>

```typescript
public readonly hiddenFromGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityProviderUserId`<sup>Required</sup> <a name="identityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId"></a>

```typescript
public readonly identityProviderUserId: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `telephone`<sup>Required</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone"></a>

```typescript
public readonly telephone: string;
```

- *Type:* string

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailUserConfig <a name="WorkmailUserConfig" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.Initializer"></a>

```typescript
import { workmailUser } from '@cdktn/provider-aws'

const workmailUserConfig: workmailUser.WorkmailUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email">email</a></code> | <code>string</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name">name</a></code> | <code>string</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city">city</a></code> | <code>string</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company">company</a></code> | <code>string</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country">country</a></code> | <code>string</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department">department</a></code> | <code>string</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName">firstName</a></code> | <code>string</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList">hiddenFromGlobalAddressList</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId">identityProviderUserId</a></code> | <code>string</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials">initials</a></code> | <code>string</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle">jobTitle</a></code> | <code>string</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName">lastName</a></code> | <code>string</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office">office</a></code> | <code>string</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password">password</a></code> | <code>string</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street">street</a></code> | <code>string</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone">telephone</a></code> | <code>string</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole">userRole</a></code> | <code>string</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode">zipCode</a></code> | <code>string</code> | ZIP or postal code of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `hiddenFromGlobalAddressList`<sup>Optional</sup> <a name="hiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList"></a>

```typescript
public readonly hiddenFromGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `identityProviderUserId`<sup>Optional</sup> <a name="identityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId"></a>

```typescript
public readonly identityProviderUserId: string;
```

- *Type:* string

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `street`<sup>Optional</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `telephone`<sup>Optional</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone"></a>

```typescript
public readonly telephone: string;
```

- *Type:* string

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---



