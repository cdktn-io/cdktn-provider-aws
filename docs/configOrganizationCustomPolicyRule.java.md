# `configOrganizationCustomPolicyRule` Submodule <a name="`configOrganizationCustomPolicyRule` Submodule" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomPolicyRule <a name="ConfigOrganizationCustomPolicyRule" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyRuntime(java.lang.String)
    .policyText(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .debugLogDeliveryAccounts(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .region(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomPolicyRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyText">policyText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyRuntime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.triggerTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.debugLogDeliveryAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.inputParameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#region ConfigOrganizationCustomPolicyRule#region}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceIdScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceTypesScope"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagKeyScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagValueScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts">resetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(ConfigOrganizationCustomPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `resetDebugLogDeliveryAccounts` <a name="resetDebugLogDeliveryAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts"></a>

```java
public void resetDebugLogDeliveryAccounts()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts"></a>

```java
public void resetExcludedAccounts()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigOrganizationCustomPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigOrganizationCustomPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput">debugLogDeliveryAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput">policyRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput">policyTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput">triggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText">policyText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts"></a>

```java
public ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a>

---

##### `debugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="debugLogDeliveryAccountsInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyRuntimeInput`<sup>Optional</sup> <a name="policyRuntimeInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput"></a>

```java
public java.lang.String getPolicyRuntimeInput();
```

- *Type:* java.lang.String

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput"></a>

```java
public java.lang.String getPolicyTextInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput"></a>

```java
public IResolvable|ConfigOrganizationCustomPolicyRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `debugLogDeliveryAccounts`<sup>Required</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomPolicyRuleConfig <a name="ConfigOrganizationCustomPolicyRuleConfig" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleConfig;

ConfigOrganizationCustomPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyRuntime(java.lang.String)
    .policyText(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .debugLogDeliveryAccounts(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .region(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomPolicyRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText">policyText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#region ConfigOrganizationCustomPolicyRule#region}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts"></a>

```java
public ConfigOrganizationCustomPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

### ConfigOrganizationCustomPolicyRuleTimeouts <a name="ConfigOrganizationCustomPolicyRuleTimeouts" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleTimeouts;

ConfigOrganizationCustomPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference;

new ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationCustomPolicyRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---



